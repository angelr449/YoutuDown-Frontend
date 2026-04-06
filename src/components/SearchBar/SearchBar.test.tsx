import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; // ← default import, no destructurado
import { SearchBar } from "./SearchBar";


vi.mock('../../../helpers/getInfoVideo', () => ({
  getInfoVideo: vi.fn().mockResolvedValue(null),
}));

describe('SearchBar', () => {

  afterEach(() => {
    vi.useRealTimers();
  });

  test('should change placeholder when user is writting', async () => {
    render(<SearchBar videoURL="" setVideoURL={() => {}} setInfoVideo={() => {}} />)
    const input = screen.getByPlaceholderText('¿Qué gustas descargar?');
    await userEvent.type(input, 'youtube.com/video');
    expect(input).toHaveValue('youtube.com/video');
  });

  test('should call setVideoURL when Button is click', async () => {
    const setVideoURL = vi.fn();
    render(<SearchBar videoURL="" setVideoURL={setVideoURL} setInfoVideo={() => {}} />)
    const button = screen.getByText('Buscar');
    await userEvent.click(button);
    expect(setVideoURL).toHaveBeenCalledTimes(1);
  });

  test('should await 300ms when inputValue changed', async () => {
    const setVideoURL = vi.fn();

    
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const user = userEvent.setup({ delay: null });

    render(
      <SearchBar videoURL="" setVideoURL={setVideoURL} setInfoVideo={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('¿Qué gustas descargar?');
    await user.type(input, 'youtube.com/video');

    expect(setVideoURL).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(300);

    expect(setVideoURL).toHaveBeenCalledTimes(1);
    expect(setVideoURL).toHaveBeenCalledWith('youtube.com/video');
  });

});