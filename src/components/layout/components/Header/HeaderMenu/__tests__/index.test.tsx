import { render, screen, prettyDOM } from '@testing-library/react';

import { HeaderMenu } from '../component';
import { IHeaderMenuProps } from '../types';

const closeFn = jest.fn();
const anchorElDom = document.createElement('div');

const props = {
  menuId: '1',
  anchorEl: anchorElDom,
  open: false,
  onMenuClose: closeFn,
} as unknown as IHeaderMenuProps;

describe('<HeaderMenu /> component', () => {
  test('Should display header menu content', () => {
    const { container } = render(<HeaderMenu {...props} />);

    console.log(prettyDOM(container));
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
