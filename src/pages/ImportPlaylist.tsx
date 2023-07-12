import SetBar from "../components/StepBar";
import AppleSpotifySvg from "../assets/importFromApple.png"
import CasualMan from "../assets/casualMan.png"


export default function ImportPlaylist () {
    return (
        <>
        <div className='bg-gradient-to-b from-spotify-black/70 to-spotify-black min-h-screen md:h-[100vh] min-w-screen relative overflow-hidden'>
            <div className="flex flex-col">
            <SetBar />
            <div className="p-4 md:p-20 space-y-5">
                <img src={AppleSpotifySvg} 
                alt="import from apple"
                className=""
                />
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-left w-2/3 sm:w-1/2 md:w-1/3">Bring your <span className="text-spotify-green">vibes</span> over to this side</h1>
                <img src={CasualMan} 
                className="mx-auto pt-10"
                alt="Man"
                />


            </div>
            </div>
        </div>
        </>
    )
}