import { ICtaSignupBlock } from '../types';

export const SignupBanner = ({ copy, cta, ref }: ICtaSignupBlock) => {

  return (
    <div className='signupBanner'>
      <p>{copy}</p>
      <button onClick={() => ref.current.scrollIntoView()}>{cta}</button>
    </div>
  );
}