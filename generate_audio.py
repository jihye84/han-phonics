import asyncio
import edge_tts
import os

syllables = [
    '아', '야', '어', '여', '오', '요', '우', '유', '으', '이',
    '하', '햐', '허', '혀', '호', '효', '후', '휴', '흐', '히'
]
VOICE = "ko-KR-SunHiNeural" 

async def main():
    os.makedirs("audio", exist_ok=True)
    for word in syllables:
        filepath = f"audio/{word}.mp3"
        if not os.path.exists(filepath):
            communicate = edge_tts.Communicate(word, VOICE)
            await communicate.save(filepath)
            print(f"Generated {word}.mp3")

if __name__ == "__main__":
    asyncio.run(main())
