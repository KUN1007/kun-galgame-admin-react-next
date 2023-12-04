import Image from 'next/image'
import { Flex, Avatar } from '@radix-ui/themes'

export default function UserInfo() {
  return (
    <Flex justify={'center'}>
      <Image
        src="/favicon.webp"
        width={50}
        height={50}
        priority={true}
        alt="Picture of the author"
      />
      <span>KUN Visual Novel</span>
    </Flex>
  )
}
