import React from 'react'

function PlayerHome() {
    const baseUrl = import.meta.env.BASE_URL ?? '/';

  return (
    <div className='h-full max-w-md mx-auto text-right'>
      <div className='relative'>
        <img src={`${baseUrl}League/proScan-league.png`} alt="" className='w-full object-cover'/>
        <h2 className='text-white text-2xl absolute right-5 font-bold bottom-4' dir='auto'>كأس ProScan للنخبة</h2>
      </div>
      <div className='px-8'>
        <h2 className='text-xl font-bold py-2'>نخبة اللاعبين</h2>

        <div className='flex flex-col items-center relative h-full max-w-[375px] mx-auto'>
          <div className='w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-1/2 -translate-x-1/2' width="323" height="235" viewBox="0 0 323 235" fill="none">
              <g filter="url(#filter0_d_400_1104)">
                <path d="M4.70825 19.0811V179.799C4.70825 188.537 11.3029 195.866 19.9925 196.785L299.268 226.327C309.356 227.395 318.146 219.486 318.146 209.341V19.0811C318.146 9.64746 310.499 2 301.065 2H21.7893C12.3557 2 4.70825 9.64745 4.70825 19.0811Z" fill="url(#paint0_linear_400_1104)" shape-rendering="crispEdges"/>
                <path d="M4.70825 19.0811V179.799C4.70825 188.537 11.3029 195.866 19.9925 196.785L299.268 226.327C309.356 227.395 318.146 219.486 318.146 209.341V19.0811C318.146 9.64746 310.499 2 301.065 2H21.7893C12.3557 2 4.70825 9.64745 4.70825 19.0811Z" stroke="black" stroke-width="2.56216" shape-rendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_400_1104" x="0.0109076" y="0.718872" width="322.832" height="233.819" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3.41622"/>
                  <feGaussianBlur stdDeviation="1.70811"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_1104"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_1104" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_400_1104" x1="74.5" y1="41" x2="301.844" y2="156.7" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2D7330"/>
                  <stop offset="0.301297" stop-opacity="0.81"/>
                  <stop offset="1" stop-color="#245C27"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='z-10 w-full'>
            <h3 className='font-bold mr-[26px] mt-2 text-right text-white/90'>هدافين النخبة</h3>
            <div className='flex-col flex gap-1.5'>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-3'>
                <p>15</p>
                <p>نادي الصقور</p>
                <p>موسى حمدي</p>
                <p>1</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>13</p>
                <p>نادي الجزيرة</p>
                <p>سـامي فقيهي</p>
                <p>2</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>11</p>
                <p>نادي شباب الوطن</p>
                <p>أحمد حكمي</p>
                <p>3</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>8</p>
                <p>نادي النمور</p>
                <p>محمد عريشي</p>
                <p>4</p>
              </div>
            </div>
          </div>
          <div className='mt-4 mb-24'>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-1/2 -translate-x-1/2' width="326" height="219" viewBox="0 0 326 219" fill="none">
              <g filter="url(#filter0_d_400_1120)">
                <path d="M5 192.989V18.8917C5 8.77022 13.7516 0.868741 23.8205 1.89942L305.658 30.7492C314.373 31.6413 321 38.9814 321 47.7415V192.989C321 202.423 313.353 210.07 303.919 210.07H22.0811C12.6475 210.07 5 202.423 5 192.989Z" fill="url(#paint0_linear_400_1120)"/>
                <path d="M5 192.989V18.8917C5 8.77022 13.7516 0.868741 23.8205 1.89942L305.658 30.7492C314.373 31.6413 321 38.9814 321 47.7415V192.989C321 202.423 313.353 210.07 303.919 210.07H22.0811C12.6475 210.07 5 202.423 5 192.989Z" stroke="#0F0D71" stroke-width="2.56216"/>
              </g>
              <defs>
                <filter id="filter0_d_400_1120" x="0.302656" y="0.52771" width="325.395" height="217.656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3.41622"/>
                  <feGaussianBlur stdDeviation="1.70811"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_1120"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_1120" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_400_1120" x1="163" y1="5.36001" x2="163" y2="210.07" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2E7D32"/>
                  <stop offset="1" stop-color="#46A44B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='z-10 w-full -mt-[90px]'>
            <h3 className='font-bold ml-[10px] mt-2 text-left text-white/90'>صانعي الأهداف</h3>
            <div className='flex-col flex gap-1.5'>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>15</p>
                <p>نادي الصقور</p>
                <p>موسى حمدي</p>
                <p>1</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>13</p>
                <p>نادي الجزيرة</p>
                <p>سـامي فقيهي</p>
                <p>2</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>11</p>
                <p>نادي شباب الوطن</p>
                <p>أحمد حكمي</p>
                <p>3</p>
              </div>
              <div className='flex justify-between text-white text-sm font-bold px-2 mt-4'>
                <p>8</p>
                <p>نادي النمور</p>
                <p>محمد عريشي</p>
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerHome