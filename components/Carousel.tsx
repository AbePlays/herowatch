import BlurImage from './BlurImage'
import IconClock from './IconClock'

type Props = {
  data: any[]
}

export default function Carousel({ data }: Props) {
  return (
    <>
      {data?.length > 0 ? (
        <ul className="no-scrollbar mx-auto mt-10 flex max-w-screen-lg snap-x gap-8 overflow-x-auto p-4">
          {data?.map((item) => (
            <li
              className="relative h-[25rem] w-60 shrink-0 snap-center overflow-hidden rounded-lg shadow-lg sm:h-[30rem] sm:w-80"
              key={item?.id}
            >
              <BlurImage
                alt={item.title + ' poster'}
                className="bg-gray-400"
                layout="fill"
                src={item?.poster_path ? `https://image.tmdb.org/t/p/w500/${item?.poster_path}` : item?.fallback_img}
              />
              <div className="absolute right-2 bottom-2 left-2 space-y-2 rounded-lg bg-black/25 p-2 font-semibold text-white backdrop-blur-sm">
                <h2 className="">{item?.title}</h2>
                <div className="flex items-center gap-2">
                  <IconClock />
                  <span className="text-sm uppercase tracking-widest">{item?.daysToRelease} Days to go</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No Content Found</p>
      )}
    </>
  )
}
