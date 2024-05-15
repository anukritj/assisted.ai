import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            {tagline && (
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200" style={{ fontFamily: 'Lato, sans-serif' }}>
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="leading-tight mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-gray-800 dark:text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {title}
              </h1>
            )}
            <div className="max-w-2xl">
              {subtitle && (
                <p className="mb-6 text-lg sm:text-xl font-medium text-gray-600 dark:text-slate-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-start">
                {callToAction && (
                  <CTA
                    callToAction={callToAction}
                    linkClass="btn btn-primary px-5 py-3 text-lg sm:px-6 sm:py-3 sm:text-base"
                  />
                )}
                {callToAction2 && (
                  <CTA
                    callToAction={callToAction2}
                    linkClass="btn px-5 py-3 text-lg sm:px-6 sm:py-3 sm:text-base"
                  />
                )}
              </div>
            </div>
          </div>
          {image && (
            <div className="mt-8 md:mt-0 md:w-1/2 relative">
              <Image
                className="mx-auto h-auto w-full rounded-md dark:bg-slate-700"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
