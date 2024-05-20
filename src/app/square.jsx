import Image from 'next/image';

export default function Square() {
    return (
        <div className='w-2/3 h-1/2 border-4 bg-panelBg/50'>
            <Image/>
            <h2>The Heat Ordering Platform</h2>
            <h4>Developed ordering platform for school cafeteria & admin panel to edit menu items</h4>
            <div>
                <h6>next.js</h6>
                <h4>⋅</h4>
                <h6>firebase</h6>
                <h4>⋅</h4>
                <h6>tailwind css</h6>
            </div>
        </div>
    )
}