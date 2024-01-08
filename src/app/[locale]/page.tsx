import Intro from '@/components/Body/Intro/Intro';
import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  const intro = useTranslations('intro')
  // return <h1>{t('title')}</h1>;
  return(
    <div className=''>
      <Intro contactme={intro('contactme')} introText={intro('introText')}/>
    </div>
  )
}