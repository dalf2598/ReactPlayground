import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import AddCategory from '../../components/AddCategory';

const handleAddCategory = jest.fn();

const setup = () => {
  render(<AddCategory addCategory={handleAddCategory} />);
};

test('Verify component is rendered', () => {
    setup();
});

describe('Component UI Testing', () => {
  beforeEach(() => setup());
  afterEach(() => cleanup());

  test('Verify change in textbox', () => {
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Berserk' } });

    expect(inputElement.value).toBe('Berserk');
  });

  test('Verify form should not add category', () => {
    const formElement = screen.getByRole('form');

    fireEvent.submit(formElement);

    expect(handleAddCategory).not.toHaveBeenCalled();
  });

  test('Verify form should add category', () => {
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const formElement = screen.getByRole('form');
   
    fireEvent.change(inputElement, { target: { value: 'Berserk' } });
    fireEvent.submit(formElement);

    expect(handleAddCategory).toHaveBeenCalledWith(expect.any(String));
    expect(inputElement.value).toBe('');
    });
});