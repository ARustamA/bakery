import React from 'react';


import style from './Header.module.scss';

export const Header = () => {
  const menuItems = [
    { value: 'Главная', href: "#main", id: 1 },
    { value: 'О нас', href: "#about", id: 2 },
    { value: 'Этапы', href: "#stages", id: 4 },
    { value: 'Форматы', href: "#formats", id: 3 },
    { value: 'Контакты', href: "#information", id: 5 },
  ]
  return (
    <header className={style.header}>
      <a href="tel:+78005556807" className={style.phone}>+7 800 555 68 07</a>
      <div className={style.menu}>
        <ul className={style.ul}>
          {menuItems.map(item =>
            <li key={item.id}>
              <a href={item.href}>{item.value}</a>
            </li>
          )}
        </ul>
      </div>

      <div className={style.social}>
        <a href="https://vk.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192 192"><g fill="none" fillRule="evenodd"><path fill="#5181B8" d="M66.56 0h58.88C179.2 0 192 12.8 192 66.56v58.88c0 53.76-12.8 66.56-66.56 66.56H66.56C12.8 192 0 179.2 0 125.44V66.56C0 12.8 12.8 0 66.56 0z" /><path fill="#FFF" d="M157.234 66.146c.89-2.966 0-5.146-4.234-5.146h-14c-3.56 0-5.2 1.883-6.09 3.96 0 0-7.12 17.353-17.206 28.625-3.263 3.263-4.746 4.301-6.526 4.301-.89 0-2.178-1.038-2.178-4.004V66.146c0-3.56-1.033-5.146-4-5.146H81c-2.224 0-3.562 1.652-3.562 3.218 0 3.375 5.042 4.153 5.562 13.645V98.48c0 4.52-.816 5.34-2.596 5.34-4.746 0-16.29-17.432-23.138-37.377C55.924 62.566 54.578 61 51 61H37c-4 0-4.8 1.883-4.8 3.96 0 3.708 4.747 22.1 22.1 46.424C65.869 127.995 82.168 137 97 137c8.9 0 10-2 10-5.445V119c0-4 .843-4.798 3.661-4.798 2.077 0 5.636 1.038 13.943 9.047C134.096 132.742 135.66 137 141 137h14c4 0 6-2 4.846-5.947-1.262-3.934-5.794-9.64-11.808-16.406-3.263-3.857-8.158-8.01-9.64-10.086-2.077-2.67-1.484-3.857 0-6.23 0 0 17.056-24.027 18.836-32.185z" /></g></svg>
        </a>
        <a href="https://xn--80affa3aj0al.xn--80asehdb/">
          <svg fill="none" height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M250 500c138.071 0 250-111.929 250-250S388.071 0 250 0 0 111.929 0 250s111.929 250 250 250z" fill="#34aadf" /><path d="M104.047 247.832s125-51.3 168.352-69.364c16.619-7.225 72.977-30.347 72.977-30.347s26.012-10.115 23.844 14.451c-.723 10.116-6.503 45.52-12.283 83.815-8.671 54.191-18.064 113.439-18.064 113.439s-1.445 16.619-13.728 19.509-32.515-10.115-36.127-13.006c-2.891-2.167-54.191-34.682-72.977-50.578-5.058-4.335-10.838-13.005.722-23.121 26.012-23.844 57.081-53.468 75.867-72.254 8.671-8.671 17.341-28.902-18.786-4.336-51.3 35.405-101.878 68.642-101.878 68.642s-11.561 7.225-33.237.722c-21.677-6.502-46.966-15.173-46.966-15.173s-17.34-10.838 12.284-22.399z" fill="#fff" /></svg>
        </a>
        <a href="https://www.instagram.com/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="2.842170943040401e-14 0 3364.7 3364.7" width="2500" height="2500"><defs><radialGradient id="a" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21" /><stop offset=".78" stopColor="#d82d7e" /></radialGradient><radialGradient id="b" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" /><stop offset="1" stopColor="#8c3aaa" /></radialGradient></defs><path d="M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1 119.8 376.3 164.3 308 236 236c71.8-71.8 140.1-116.4 236-153.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9" fill="url(#a)" /><path d="M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1 119.8 376.3 164.3 308 236 236c71.8-71.8 140.1-116.4 236-153.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9" fill="url(#b)" /><path d="M1269.25 1689.52c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86-287.36-641.86-641.86-641.86S1044 1335 1044 1689.52m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M1180.85 2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27S2059.13 666 2191 672c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M1170.5 447.09c-133.07 6.06-224 27.16-303.41 58.06-82.19 31.91-151.86 74.72-221.43 144.18S533.39 788.47 501.48 870.76c-30.9 79.46-52 170.34-58.06 303.41-6.16 133.28-7.57 175.89-7.57 515.35s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43s139.14 112.18 221.43 144.18c79.56 30.9 170.34 52 303.41 58.06 133.35 6.06 175.89 7.57 515.35 7.57s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43s-139.24-112.27-221.33-144.18c-79.56-30.9-170.44-52.1-303.41-58.06-133.3-6.09-175.89-7.57-515.3-7.57s-382.1 1.41-515.45 7.57" fill="#fff" /></svg>
        </a>
        <button className={style.button}>Хочу открыть пекарню</button>
      </div>





    </header>
  )
}

