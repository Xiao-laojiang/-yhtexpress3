import { NextResponse } from 'next/server'

interface TrackingInfo {
  status: string
  location: string
  timestamp: string
  details: string
}

export async function POST(request: Request) {
  const { trackingNumber } = await request.json()

  try {
    const response = await fetch('https://api.17track.net/track/v2/gettrackinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        '17token': process.env.SEVENTEEN_TRACK_API_KEY || '',
      },
      body: JSON.stringify({
        "data": [
          {
            "number": trackingNumber
          }
        ]
      }),
    })

    if (!response.ok) {
      throw new Error('17track API响应错误')
    }

    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(data.msg || '查询失败')
    }

    const trackInfo = data.data[0]
    const events = trackInfo.track_info.reverse()

    const trackingInfo: TrackingInfo[] = events.map((event: any) => ({
      status: event.event,
      location: event.location,
      timestamp: new Date(event.time * 1000).toLocaleString('zh-CN'),
      details: event.details
    }))

    return NextResponse.json({ trackingInfo })
  } catch (error) {
    console.error('Error fetching tracking info:', error)
    return NextResponse.json({ error: '无法获取轨迹信息' }, { status: 500 })
  }
}

