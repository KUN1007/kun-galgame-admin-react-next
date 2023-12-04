'use client'

import { Flex, Box } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

export default function AsideNav() {
  const [items, setItems] = useState([
    '论坛概览',
    '用户管理',
    '话题管理',
    '回复管理',
    '评论管理',
    '公告管理',
  ])

  return (
    <nav>
      <Flex direction={'column'}>
        {items.map((item, index) => (
          <Box key={index} width="9" height="9">
            {item}
          </Box>
        ))}
      </Flex>
    </nav>
  )
}
