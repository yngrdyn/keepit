import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

jest.mock('./src/firebase/firebase', () => {
  return {
      ref: jest.fn().mockReturnValue({
        push: jest.fn(() => Promise.resolve({
          key: '',
        })),
      })
  };
});