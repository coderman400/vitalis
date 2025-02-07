from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from fastapi.responses import HTMLResponse
from dotenv import load_dotenv
import os
from starlette.middleware.sessions import SessionMiddleware
from database import get_user, verify_password
from gemini import Bot,BotManager


# Load environment variables from .env file
load_dotenv()
api_key = os.getenv("GENAI_KEY")

# FastAPI app setup
app = FastAPI()

# Add session middleware
app.add_middleware(SessionMiddleware, secret_key="your-secret-key")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

bot_manager = BotManager()


@app.post("/token")
async def login_for_access_token(form_data: dict):
    user = get_user(form_data["username"])
    if not user or not verify_password(user["password"], form_data["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {"access_token": form_data["username"], "token_type": "bearer"}

@app.get("/chat")
async def chat(request: Request, token: str = Depends(oauth2_scheme)):
    user_id = token  # In a real app, this would be decoded from the token
    user_bot = bot_manager.get_bot(user_id)
    user_bot.create_chat()
    
    # Read the message from query parameters or body
    message = request.query_params.get("message", "Hello, bot!")
    response = user_bot.chat(message).text
    return {"response": response}

@app.get("/")
async def home():
    return HTMLResponse("""
    <html>
        <body>
            <h1>FastAPI Chatbot</h1>
            <p>Go to /chat?message=your_message to chat.</p>
        </body>
    </html>
    """)
