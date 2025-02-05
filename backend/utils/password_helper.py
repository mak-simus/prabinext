from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def hash_password(password: str) -> str:
    """
    Hash a password using bcrypt with $2y$10$ format
    """
    return bcrypt.generate_password_hash(password, 10).decode('utf-8')

def check_password(password_hash: str, password: str) -> bool:
    """
    Verify a password against a hash
    """
    return bcrypt.check_password_hash(password_hash, password)
