import Image from 'next/image';

export default function Square(imagePath) {
    return (
        <div className='w-2/3 h-1/2 border-4 bg-panelBg/50 flex flex-col '>
            <Image
                src={imagePath}
                width={75}
                height={75}
            />
            <h2 className='font-bold text-3xl'>The Heat Ordering Platform</h2>
            <h4 className='text-2xl'>Developed ordering platform for school cafeteria & admin panel to edit menu items</h4>
            <div className='flex flex-row w-full justify-between'>
                <h6 className='font-lg'>next.js</h6>
                <h4 className='font-2xl'>⋅</h4>
                <h6 className='font-lg'>firebase</h6>
                <h4 className='font-2xl'>⋅</h4>
                <h6 className='font-lg'>tailwind css</h6>
            </div>
        </div>
    )
}