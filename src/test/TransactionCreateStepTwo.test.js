import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo"

test('If amount and note are not empty, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepTwo
        receiver={{ id: "2" }}
        sender={{ id: "3" }}
    />);
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner");

    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
});