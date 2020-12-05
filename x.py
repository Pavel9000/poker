import pyautogui

# print(pyautogui.position())

# screen = pyautogui.screenshot('screenshot.png')

# pyautogui.screenshot('screenshot.png',region=(0, 40, 60, 60))

template = pyautogui.locateOnScreen('screenshot.png')
print(template)