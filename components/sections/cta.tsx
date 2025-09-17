import Link from 'next/link';

export default function CallToAction(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-6 rounded-[2rem] border py-16">
                <div className="text-center">
                    <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Link href="/" className="btn variant-primary sz-lg">
                            <span>Get Started</span>
                        </Link>
                        <Link href="/" className="btn variant-outlined sz-lg">
                            <span>Book Demo</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}