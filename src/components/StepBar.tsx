import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
    { name: 'Step 1', href: '#', status: 'current' },
    { name: 'Step 2', href: '#', status: 'incomplete' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SetBar (props: any) {
    return (
        <nav aria-label="Progress">
            <ol className="flex items-center justify-center p-10">
                {steps.map((step, stepIdx) => (
                <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                    {step.status === 'complete' ? (
                    <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-spotify-green" />
                        </div>
                        <a
                        href="/"
                        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-spotify-green hover:bg-indigo-900"
                        >
                        <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        <span className="sr-only">{step.name}</span>
                        </a>
                    </>
                    ) : step.status === 'current' ? (
                    <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-spotify-grey" />
                        </div>
                        <a
                        href="/"
                        className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-spotify-green bg-spotify-grey"
                        aria-current="step"
                        >
                        <span className="h-2.5 w-2.5 rounded-full bg-spotify-green" aria-hidden="true" />
                        <span className="sr-only">{step.name}</span>
                        </a>
                    </>
                    ) : (
                    <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="h-0.5 w-full bg-spotify-grey" />
                        </div>
                        <a
                        href="/"
                        className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-spotify-grey bg-spotify-grey hover:border-gray-400"
                        >
                        <span
                            className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                            aria-hidden="true"
                        />
                        <span className="sr-only">{step.name}</span>
                        </a>
                    </>
                    )}
                </li>
                ))}
            </ol>
        </nav>
    )
}