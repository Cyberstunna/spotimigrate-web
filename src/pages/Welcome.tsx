import { Link } from "react-router-dom"
import SpotifyLogo from "../assets/spotify.png"

const buttons = [
    {
        title: "Migrate from Apple Music", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M19.9983 5.1025L19.9992 5.02167C19.9992 4.4025 19.9258 3.80083 19.7883 3.225L19.7992 3.2775C19.5506 2.23275 18.9038 1.3264 17.9967 0.751667L17.98 0.741667C17.5128 0.43917 16.9892 0.234233 16.4408 0.139167L16.4158 0.135833C15.9883 0.0609907 15.5556 0.0192003 15.1217 0.0108333H15.1125C15.0792 0.0108333 15.0433 0.0025 15.0092 0H4.98833C4.86167 0.00833333 4.73833 0.0141667 4.60917 0.0216667C3.97161 0.0334566 3.34037 0.150302 2.74083 0.3675L2.78167 0.355C2.25108 0.556042 1.76681 0.86265 1.35815 1.25627C0.949497 1.64988 0.624954 2.12233 0.404167 2.645L0.394167 2.6725C0.2525 3.01333 0.146667 3.41 0.0941667 3.8225L0.0916667 3.84583C0.0491667 4.13167 0.0191667 4.47167 0.00833333 4.81667V4.83C0.00833333 4.85667 0.0025 4.88167 0 4.9075V15.0942C0.00833333 15.2108 0.0141667 15.33 0.0225 15.4475C0.0391667 16.165 0.190833 16.8417 0.4525 17.4608L0.439167 17.425C0.686043 17.9844 1.05276 18.4827 1.51341 18.8847C1.97406 19.2868 2.51739 19.5827 3.105 19.7517L3.13417 19.7592C3.44833 19.8517 3.815 19.9192 4.19333 19.9483L4.21167 19.9492C4.67417 19.9933 5.13667 19.9992 5.60083 19.9992H14.7908C15.2525 19.9992 15.7067 19.9683 16.1517 19.91L16.0992 19.9158C16.7887 19.8417 17.4511 19.6068 18.0333 19.23L18.0158 19.2408C18.6979 18.7984 19.238 18.1688 19.5717 17.4275L19.5825 17.4008C19.7208 17.0817 19.8283 16.71 19.8875 16.3233L19.8908 16.2975C19.9758 15.7322 20.0118 15.1606 19.9983 14.5892V5.105V5.1025ZM14.645 8.4275V13.1875L14.6458 13.2567C14.6458 13.5958 14.5708 13.9183 14.4358 14.2067L14.4417 14.1925C14.3307 14.4237 14.171 14.6281 13.9735 14.7917C13.776 14.9553 13.5453 15.0741 13.2975 15.14L13.285 15.1425C12.9974 15.2258 12.7008 15.2742 12.4017 15.2867H12.3933C12.3692 15.2883 12.3417 15.2883 12.3133 15.2883C11.9601 15.2887 11.6172 15.169 11.3409 14.9491C11.0645 14.7291 10.871 14.4218 10.7921 14.0775C10.7132 13.7332 10.7536 13.3723 10.9065 13.0539C11.0595 12.7355 11.3161 12.4785 11.6342 12.325L11.6433 12.3208C11.8875 12.2042 12.1725 12.1108 12.4692 12.0542L12.4917 12.0508C12.8067 11.9825 13.1233 11.9233 13.4367 11.8508C13.5433 11.8329 13.6416 11.782 13.7178 11.7054C13.7941 11.6287 13.8444 11.5301 13.8617 11.4233V11.4208C13.873 11.3691 13.8786 11.3163 13.8783 11.2633V6.72333C13.8777 6.6698 13.8702 6.61658 13.8558 6.565L13.8567 6.56917C13.8455 6.51184 13.8139 6.4605 13.7678 6.42465C13.7217 6.3888 13.6641 6.37087 13.6058 6.37417C13.4575 6.385 13.3233 6.40417 13.1908 6.4325L13.2108 6.42917C12.5775 6.55417 11.9442 6.68083 11.3108 6.80917L8.2275 7.4325C8.21417 7.4325 8.20083 7.44083 8.1875 7.44333C8.09077 7.45626 8.00282 7.50622 7.9422 7.5827C7.88158 7.65918 7.853 7.7562 7.8625 7.85333V7.85167V14.4608L7.86333 14.54C7.86333 14.88 7.7975 15.2042 7.67667 15.5L7.6825 15.4825C7.5755 15.7344 7.41188 15.9583 7.20435 16.1368C6.99682 16.3153 6.75095 16.4436 6.48583 16.5117L6.47333 16.5142C6.18414 16.5991 5.8854 16.6472 5.58417 16.6575H5.5775C5.2004 16.6789 4.82867 16.5604 4.53356 16.3246C4.23846 16.0889 4.04075 15.7525 3.97833 15.38L3.9775 15.3708C3.91244 15.0176 3.97158 14.6528 4.14489 14.3382C4.3182 14.0236 4.595 13.7787 4.92833 13.645L4.93917 13.6417C5.22789 13.5279 5.52711 13.4427 5.8325 13.3875L5.8625 13.3833C6.10167 13.3333 6.34167 13.2867 6.57917 13.2358C6.71802 13.2158 6.84501 13.1464 6.93684 13.0403C7.02867 12.9342 7.0792 12.7986 7.07917 12.6583V12.64V12.6408V5.1075C7.07917 5 7.09167 4.89583 7.11583 4.79583L7.11417 4.805C7.14054 4.6976 7.19708 4.59998 7.2771 4.52364C7.35713 4.44731 7.45731 4.39545 7.56583 4.37417L7.56917 4.37333C7.78167 4.31833 7.99833 4.28 8.21417 4.23583C8.825 4.11083 9.43583 3.98583 10.0475 3.86583L11.9392 3.4825C12.4975 3.37083 13.0558 3.2575 13.6142 3.14917C13.765 3.11417 13.9533 3.08333 14.145 3.0625L14.1675 3.06083C14.2247 3.05369 14.2828 3.05867 14.338 3.07546C14.3932 3.09225 14.4442 3.12047 14.4877 3.15828C14.5313 3.19609 14.5664 3.24265 14.5907 3.29492C14.6151 3.34719 14.6282 3.404 14.6292 3.46167C14.6358 3.5175 14.6392 3.58167 14.6392 3.64667V8.42417L14.645 8.4275Z" fill="black"/>
        </svg>,
        type: "migrate",
        href: "import"
    },
    {
        title: "Migrate from Tidal", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path d="M12.012 0L8.008 4.004L4.004 0L0 4.004L4.004 8.008L8.008 4.004L12.012 8.008L8.008 12.012L12.012 16.016L16.016 12.012L12.012 8.008L16.016 4.004L12.012 0ZM16.042 4.004L20.021 0.0250001L24 4.004L20.021 7.983L16.042 4.004Z" fill="black"/>
        </svg>,
        type: "migrate",
        href: "import"
    },
    {
        title: "Sign up for a new account", 
        icon: null,
        type: "register",
        href: "register"
    }
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Welcome () {
    return(
        <>
        {/* Bottom Layer */}
        <div  className='bg-gradient-to-b from-spotify-black/70 to-spotify-black min-h-screen md:h-[100vh] min-w-screen relative overflow-hidden'>
        <div className="mt-0 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-28 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-32">
                <div className="relative">
                    <img
                    src="https://www.levelman.com/content/images/size/w1000/2022/11/scorpion.jpg"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width={80}
                    height={80}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                    <img
                    src="https://merchbar.imgix.net/product/337/9912/mcm-cd7261639/e9X_YslbMCM_CD7261639.jpg?quality=70&auto=compress,format&fit=crop&crop=faces,entropy&w=1000&h=1000"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width={160}
                    height={160}                />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                    <img
                    src="https://i.scdn.co/image/ab67616d0000b2730f79d1616e3b02368d41f458"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width={160}
                    height={160}                />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-8 sm:pt-0">
                <div className="relative -right-20 w-28">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/en/3/3d/Dave_-_We%27re_All_Alone_in_This_Together.jpg"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width="160"
                    height="160"                />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative w-36">
                    <img
                    src="https://images.genius.com/9be43ad6ea6360208746fb84fdbbdc1c.1000x1000x1.jpg"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width="160"
                    height="160"                />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                    <img
                    src="https://www.udiscovermusic.com/wp-content/uploads/2020/05/jhene-aiko-chilombo-deluxe.jpg"
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none"
                    width="160"
                    height="160"                />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                
            </div>
            
        </div>
        </div>

        {/* Top Layer */}
        <div className="bg-spotify-black/70 min-h-screen min-w-full max-w-screen absolute top-0">
            <div className="max-w-[85vw] mx-auto mt-44 space-y-8">
                <div className="w-20 mx-auto">
                    <img
                    src={SpotifyLogo}
                    alt=""
                    className=" w-full rounded-md object-cover shadow-none" />
                </div>
                <h1 className="text-white text-center text-4xl font-bold">All your sounds in the <span className="text-spotify-green">best</span> place</h1>
            </div>

            <div className="flex flex-col items-center justify center mt-52 space-y-3">
                {
                    buttons.map((button, index)=>{
                        return (
                        <Link 
                        key={index}
                        to={button.href}
                        className={classNames(button.type === "migrate" ? " bg-spotify-grey py-2.5 px-2.5 w-9/12 rounded-3xl " : " bg-spotify-green py-2.5 px-2.5 w-9/12 rounded-3xl ")}  
                        >
                            <div className="flex flex-row items-center text-lg text-center text-white font-bold">
                                <div className="max-w-1/6">
                                {button.icon && button.icon}
                                </div>
                                <div className="mx-auto">
                                {button.title}
                                </div>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}