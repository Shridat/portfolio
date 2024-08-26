import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Software Engineer...',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Frontend Developer...',
        1000,
        'I am a Backend Developer...',
        1000,
        'I am a Data Analyst...',
        1000,
        'I am a ML Engineer...',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default Typing;
