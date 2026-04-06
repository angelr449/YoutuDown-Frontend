
import { describe, expect, test } from "vitest";
import { SettingsPage } from "./SettingsPage";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";



describe('SeetinsPage', () => {

    test('should have been called handleSettingsPageBox when button with id= settings-btn is called', async () => {


        

        render(<SettingsPage />);

        const settingsBtn = document.querySelector('#settings-btn')!;
        await userEvent.click(settingsBtn);

        expect(document.querySelector('#settings-page-box')).toBeInTheDocument();

    })
    test('should hide settings box when button is clicked twice', async () => {
        render(<SettingsPage />);

        const settingsBtn = document.querySelector('#settings-btn')!;

        await userEvent.click(settingsBtn); // Open
        await userEvent.click(settingsBtn); // Close

        expect(document.querySelector('#settings-page-box')).not.toBeInTheDocument();
    });

})