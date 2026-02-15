import jwt from 'jsonwebtoken';

interface CannyUser {
  id: string;
  name: string;
  email: string;
  avatarURL?: string;
  created?: string;
}

/**
 * Generate a secure HS256 JWT token for Canny SSO
 * This token allows users to be auto-authenticated when accessing the feedback board
 */
export function generateCannyToken(user: CannyUser): string {
  const privateKey = process.env.CANNY_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error('CANNY_PRIVATE_KEY is not set in environment variables');
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    ...(user.avatarURL && { avatarURL: user.avatarURL }),
    ...(user.created && { created: user.created }),
  };

  return jwt.sign(payload, privateKey, {
    algorithm: 'HS256',
    expiresIn: '24h', // Token valid for 24 hours
  });
}
