import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import reactRouter from 'react-router';
import * as gamesService from '../../service/games';
import * as playersService from '../../service/players';
import { Game } from '../../types/game';
import { Player } from '../../types/player';
import { Poker } from './Poker';

jest.mock('../../service/players');
jest.mock('../../service/games');
const mockHistoryPush = jest.fn();

describe('Poker component', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useHistory').mockReturnValue({ push: mockHistoryPush } as any);
    jest.spyOn(reactRouter, 'useParams').mockReturnValue({ id: 'testId' } as any);
  });

   it('should display loading spinner initially', async () => {
     jest.spyOn(gamesService, 'streamGame').mockImplementation(() => ({
      onSnapshot: jest.fn(callback => setTimeout(() => callback({ exists: false }), 50))  
    }) as any);
    jest.spyOn(gamesService, 'streamPlayers').mockImplementation(() => ({
      onSnapshot: jest.fn(callback => setTimeout(() => callback([]), 50))
    }) as any);

    act(() => {
      render(<Poker />);
    });

    expect(screen.getByRole('progressbar')).toBeInTheDocument(); 
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());
  it('should display the game area when game and players are found', async () => {
    act(() => {
      render(<Poker />);
    }); 
    await waitFor(() => expect(screen.queryByTestId('gameAreaTestId')).toBeInTheDocument()); 
    await waitFor(() => expect(screen.queryByText('Specific text from your game area')).toBeInTheDocument());
  });

});
});
