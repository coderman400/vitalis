from google import genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GENAI_KEY")




class Bot:
    def __init__(self, api_key=os.getenv("GENAI_KEY")):
        # Initialize the genai client
        self.client = genai.Client(api_key=api_key)

    def create_chat(self):
        # Ensure that self.client is initialized
        if not self.client:
            raise ValueError("The genai client is not initialized properly.")

        # Create a chat session
        self.chat_client = self.client.chats.create(model="gemini-1.5-flash")

    def chat(self, message):
        if not hasattr(self, 'chat_client'):
            raise NotImplementedError("Chat client is not created. Call create_chat first.")

        response = self.chat_client.send_message(message)
        return response
    
    def chat_history(self, response):
        for message in chat_history:
            print(f'role - ', message.role, end=": ")
            print(message.parts[0].text)
        

class BotManager:
    def __init__(self):
        self.bots = {}

    def get_bot(self, user_id: str) -> Bot:
        if user_id not in self.bots:
            self.bots[user_id] = Bot(api_key=api_key)
        return self.bots[user_id]


if __name__ == "__main__":
    bot_manager = BotManager()
    user_id = "user123"
    bot = bot_manager.get_bot(user_id)
    bot.create_chat()
    response = bot.chat("Hello, how are you?")
    chat_history = bot.chat_client._curated_history
    chat_history = bot.chat_history(chat_history)
