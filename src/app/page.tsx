import Header from '@/components/header'
import FirstChallenge from '@/components/sections/firstChallenge'
import SecondChallenge from '@/components/sections/secondChallenge'
import ThirdChallenge from '@/components/sections/thirdChallenge'
import WarnSection from '@/components/sections/warn'
import WarnTwo from '@/components/sections/warnTwo'

export default function Home() {
  return <>
    <Header />
    <WarnSection />
    <WarnTwo />
    <FirstChallenge />
    <SecondChallenge />
    <ThirdChallenge />
  </>
}
