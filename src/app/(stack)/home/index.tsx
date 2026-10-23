import { View } from 'react-native'

import { Link, router } from 'expo-router'

import CustomButton from '@/components/shared/CustomButton';


const HomeScreen = () => {
  return (
    <View className="px-10">
      
      <CustomButton className='mb-2' color='primary' onPress={()=>router.push('/products')}> Productos </CustomButton>
      <CustomButton className='mb-2' color='secondary' onPress={()=>router.push('/profile')}> Perfil </CustomButton>
      <CustomButton className='mb-2' color='tertiary' onPress={()=>router.push('/settings')}> Ajustes </CustomButton>

      <Link href='/products' asChild>
        <CustomButton className='mb-10' variant='text-only' color='primary'> Productos </CustomButton>
      </Link>

      {/* <Link className="mb-5" href='/products'>
        Productos{' '}
      </Link>
      <Link className="mb-5" href='/profile'>
        Perfil{' '}
      </Link>
      <Link className="mb-5" href='/settings'>
        Ajustes{' '}
      </Link> */}
    </View>
  );
};

export default HomeScreen