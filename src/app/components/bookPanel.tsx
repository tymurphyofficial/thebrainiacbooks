import { IBookPanel } from '../types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const BookPanel = ({ cover, background, title, type, synopsis, cta, url }: IBookPanel) => {

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <p className="text-md mb-4 font-serif">{children}</p>
      ),
    },
  };


  return (
    <div className='flex flex-col overflow-hidden mb-10 border border-black rounded-3xl'>
      <div 
        className='flex p-[60px] self-center w-full h-full max-h-[720px] max-w-[1280px] bg-center bg-cover rounded-3xl' 
        style={{ backgroundImage: `url(${background.url})` }}
      >
        <img src={cover.url} className='max-h-[520px]'/>

        <div className='ml-[60px] px-8 pt-6 pb-4 flex flex-col justify-between bg-black/50 text-white rounded-sm'>
          <div>
            <div className='text-sm font-light mb-1.5 text-[#e9e9e9]'>{type}</div>
            <div className='text-2xl font-extrabold mb-3 uppercase'>{title}</div>
            <div className=''>{documentToReactComponents(synopsis.json, options)}</div>
          </div>
         
          <a href={url} className='font-bold hover:underline' target="_blank">{cta}</a>
        </div>
      </div>
    </div>
  );
}