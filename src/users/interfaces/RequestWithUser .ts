interface RequestWithUser extends Request {
    user: { email: string; role: string };
  }