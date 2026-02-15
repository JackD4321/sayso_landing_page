/**
 * Verify the feedback page password
 * This is a temporary solution until Supabase auth is integrated
 */
export function verifyFeedbackPassword(password: string): boolean {
  const correctPassword = process.env.FEEDBACK_PAGE_PASSWORD;

  if (!correctPassword) {
    throw new Error('FEEDBACK_PAGE_PASSWORD is not set in environment variables');
  }

  return password === correctPassword;
}

/**
 * Mock user data for feedback page (until Supabase integration)
 * In production, this will come from the authenticated user session
 */
export const mockFeedbackUser = {
  id: 'user-franco-001',
  name: 'Franco',
  email: 'franco@sayso.app',
  avatarURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Franco',
};
