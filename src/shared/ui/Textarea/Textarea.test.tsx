import { render, screen } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('<Textarea />', () => {
  test('render a default textarea', () => {
    /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
    render(<Textarea register={() => null} />);
    const textareaEl = screen.getByRole('textbox');
    expect(textareaEl).toBeInTheDocument();
    expect(textareaEl).toHaveClass('textarea__field');
  });

  test('render a textarea with label', () => {
    render(
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        id="subject"
        label="Subject"
      />
    );
    const textareaEl = screen.getByRole('textbox');
    expect(textareaEl).toBeInTheDocument();
    const labelEl = textareaEl.previousSibling;
    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveClass('textarea__label');
  });

  test('render a textarea with placeholder', () => {
    render(
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        placeholder="Username"
      />
    );
    const textareaEl = screen.getByPlaceholderText('Username');
    expect(textareaEl).toBeInTheDocument();
  });
});
