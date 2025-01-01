var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: \n 個人網站: \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '\n \n \n 心得:我前面因為拍影片一直錯到最會後我居然做到便非常快，非常熟練，我前面第一個是做的最差的一個題目最後面我自己覺得做的最好 因為都完成了 而且速度非常快，且五個方法都非常熟悉， \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 第一 二題程式 \n https://gist.github.com/LYX41323113/21a480f7435af78a6281dc0aa7b8fd0e \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '這段 Python 程式碼會執行以下兩個部分： \n \n 印出金字塔形狀 ： 第一部分會印出由星號 ( * ) 組成的金字塔形狀，每行的星號數量是逐漸增加的，而每行的前導空格數量則逐漸減少。例如，對於  n = 5 ，會輸出： \n \n \n markdown \n \n \n \n \xa0學習基礎的迴圈和格式化字串 ：這段程式碼幫助理解如何使用迴圈來生成圖形，並學會如何格式化字串來顯示變數的值。 \n 簡單易懂 ：程式碼結構清晰，適合初學者理解基本的程式設計概念。 \n 靈活性高 ：可以輕鬆調整  n  來改變金字塔的大小。 \n \n 程式碼n = 5 # 設定層數 space = \' \' # 空格字元 # 第一部分：印出金字塔 for i in range(n): # 對於每一行 # 印出空格 print(space * (n - i - 1), end=\'\') # 末尾不換行 # 印出星號 print(\'*\' * (2 * i + 1)) # 星號數量為 2*i+1 print() # 加一個空行 # 第二部分：顯示當前數字 for i in range(n): # 對於每一行 # 印出當前的數字 print(f"目前的數字為 {i}") \n \n \n \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '\n 請各組組員分別利用\xa0 Brython 以及 Jupyter lab \xa0環境, 執行 可攜程式 \xa0notebook 目錄中的\xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人\xa0 Gist \xa0後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得. \n \n 以下是 01 到 10 號代碼的簡短說明和心得： \n 01 - 打印貓咪圖案： \n 程式碼 \n print(" /\\\\_/\\\\   ")\nprint(" >^.^<   ")\nprint("  / \\\\    ")\nprint(" (___)___")\n \n 說明：  打印一個簡單的 ASCII 藝術貓咪圖案。   心得：  學習如何用字符打印出簡單的圖形和符號。 \n \n 02 - 用戶輸入並輸出： \n 程式碼 \n name = input("What\'s your name?")\nfavorite_food = input("What is your favorite food?")\nprint("Hi! My name is " + name)\nprint("My favorite food is " + favorite_food)\nprint(name + "\'s favorite food is " + favorite_food)\n \n 說明：  提示用戶輸入名字和最喜歡的食物，然後輸出。   心得：  學會了如何獲取用戶輸入並將其打印輸出。 \n \n 03 - 查找書籍： \n 程式碼 \n programming_books = ["Learn python", "Python for all", "Intro to python"]\nwanted_book = input("你好！你想買哪本書？ ")\nif wanted_book in programming_books:\n    print("是的，我們有這本書！")\nelse:\n    print("抱歉，我們沒有這本書")\n \n 說明：  判斷用戶輸入的書籍是否在可供購買的列表中。   心得：  了解如何使用  if  語句和  in  操作符進行條件判斷。 \n \n 04 - 購物清單管理： \n 程式碼 \n shopping_list = ["carrots", "chocolate", "olives"]\nnew_item = input("What else do I have to buy?")\nif new_item in shopping_list:\n    print(new_item + " is/are already in the shopping list")\nelse:\n    shopping_list.append(new_item)\n    item_to_remove = input("What do I have to remove?")\n    if item_to_remove in shopping_list:\n        shopping_list.remove(item_to_remove)\n \n 說明：  管理購物清單，添加和刪除物品。   心得：  學會了如何操作列表進行添加、刪除、檢查元素。 \n \n 05 - 修改菜單： \n 程式碼 \n todays_menu = ["burger", "salad", "coke"]\nside_dish_index = todays_menu.index("salad")\ntodays_menu.pop(side_dish_index)\ntodays_menu.insert(side_dish_index, "fries")\n \n 說明：  修改菜單，替換掉 "salad" 為 "fries"。   心得：  學會了如何修改列表中的元素，通過索引定位並進行替換。 \n \n 06 - 列表切片與索引： \n 程式碼 \n cities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\nprint(cities[1])\nprint(cities[1:4])\nprint(cities[::2])\nprint(cities[::-1])\n \n 說明：  展示如何使用索引和切片操作訪問列表中的元素。   心得：  熟悉了 Python 列表的切片與反轉操作。 \n \n 07 - 修改列表元素： \n 程式碼 \n senses = ["eyes", "nose", "ears", "tongue", "skin"]\nsenses[1] = "smell"\nsenses[3:5] = ["taste", "touch"]\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nplanets = planets + ["Jupiter"]\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\n \n 說明：  修改和合併列表元素，演示了替換和拼接操作。   心得：  學會了列表的元素修改和拼接方法。 \n \n 08 - 朋友和菜肴： \n 程式碼 \n friends = ["Geetha", "Luca", "Daisy", "Juhan"]\ndishes = ["sushi", "burgers", "tacos", "pizza"]\nfor index in range(0, 4):\n    print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index])\n \n 說明：  輸出每個朋友及其喜歡的菜肴。   心得：  理解了如何通過  for  循環遍歷多個列表中的元素並輸出。 \n \n 09 - 動物循環： \n 程式碼 \n animals = ["giraffe", "penguin", "dolphin"]\nwanted_to_see = "penguin"\nfor i in range(0, len(animals)):\n    print("-- Beginning of loop --")\n    print("The element in position " + str(i) + " is " + animals[i])\nfor i in range(0, len(animals)):\n    if animals[i] == wanted_to_see:\n        print("I saw a " + animals[i] + " and I really wanted to see it!")\n    else:\n        print("I saw a " + animals[i])\n \n 說明：  遍歷動物列表，檢查是否是你想要看到的動物。   心得：  學會了如何在循環中加入條件判斷，並做出相應輸出。 \n \n 10 - 配件列表： \n 程式碼 \n accessories = ["belt", "hat", "gloves", "sunglasses", "ring"]\nfor i in range(len(accessories)):\n    print("The element " + accessories[i] + " is in position " + str(i))\nfor i in range(len(accessories)):\n    if len(accessories[i]) == 6:\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has 6 characters")\n \n 說明：  根據字符串的長度檢查配件列表中的元素。   心得：  學會了如何使用條件判斷和字符串長度方法處理列表中的元素。 \n \n 總結： \n 這些程式幫助我掌握了 Python 中常用的列表操作、條件判斷、循環結構等基本知識。每個程式展示了如何有效地操作和管理數據，並輸出結果。通過這些練習，可以加深對 Python 基礎語法和數據結構的理解。', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n 心得:這如果沒有chat gpt 和朋友的幫助我畫不出來 \n 解 \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 心得:利用所提供的程式，利用ai來完成題目，運用和w13作業相差無幾的方式來解決 \n 解 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '\n 題目一: 請利用 Gist 與 Brython 程式環境, 在個人的課程網站中新增一個頁面, 標題為 w15, 以"從 1 累加到 100"作為 anchor 的連結標題, 使用者點擊該連結之後, 可從各自的 Brython 頁面執行程式. \n 設計思考 這個需求可以透過 Python 的  range()  函式與  sum()  函式快速達成。我們利用  sum(range(1, 101))  來計算 1 到 100 的總和，並將結果顯示在網頁上。 \n def addto(init, addto):\n    sum = 0\n    for i in range(init, addto + 1):\n        sum += i\n    print(f"從 {init} 到 {addto} 的累加結果是: {sum}")\n\n# 計算從 1 到 100\naddto(1, 100)\n \n \n 題目1程式 \n 題目二: 延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果. (以"addto"作為連結標題) \n 這個函式接收兩個參數  start  和  end ，並回傳從  start  累加到  end  的總和。 sum(range(start, end + 1))  會生成一個從  start  到  end  的數字列表，並對其進行累加。 \n def addto(init, addto):\n    sum = 0\n    for i in range(init, addto + 1):\n        sum += i\n    print(f"addto 函式的總和是: {sum}")\n\n# 使用 addto 函式計算從 1 到 100\naddto(1, 100)\n \n \n \n addto \n 題目三: 延伸上題, 設計一個函式 add_only_even(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加結果. 頁面中請以\xa0 add_only_even 作為連結標題. \n 我們需要只累加範圍內的偶數，可以利用條件判斷  i % 2 == 0  來篩選出偶數。 sum(i for i in range(start, end + 1) if i % 2 == 0)  會累加所有符合條件的偶數。 \n def add_only_even(init, addto):\n    sum = 0\n    for i in range(init, addto + 1):\n        if i % 2 == 0:  # 判斷是否為偶數\n            sum += i\n    print(f"從 {init} 到 {addto} 之間的偶數總和是: {sum}")\n\n# 計算從 1 到 100 之間的偶數總和\nadd_only_even(1, 100)\n \n  add_only_even \n 題目四: 延伸上題, 設計一個函式 add_avoid_8(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加過程, 必須避開數字出現"8"的整數,\xa0頁面中請以\xa0add_avoid_8 作為連結標題. \n 設計思考 我們需要避開數字中出現 "8" 的整數。可以將數字轉換成字串並檢查字串中是否包含  "8" ，然後排除這些數字。 sum(i for i in range(start, end + 1) if \'8\' not in str(i))  可以達到此目的 \n def add_avoid_8(init, addto):\n    sum = 0\n    for i in range(init, addto + 1):\n        if \'8\' not in str(i):  # 如果數字中不包含 "8"\n            sum += i\n    print(f"從 {init} 到 {addto} 之間，避開包含 8 的總和是: {sum}")\n\n# 計算從 1 到 100 之間，避開包含 8 的數字的總和\nadd_avoid_8(1, 100)\n \n \n add_avoid_8 \n \n \n  Python 程式碼  \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '.be/mjY7mJTDjOw?si=ynnyz_Qs \n 主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1-1', 'text': '程式碼 \n \n \n \n \n  导入 Brython 库  \n \n \n  启动 Brython  \n \n', 'tags': '', 'url': 'w16_exam1-1.html'}, {'title': 'w16_exam1-2', 'text': '', 'tags': '', 'url': 'w16_exam1-2.html'}, {'title': 'HW 3', 'text': '主題13: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n \n \n \n w16_exam2', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n w16_exam2', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w16_exam2', 'text': '程式碼 \n \n \n \n \n  导入 Brython 库  \n \n \n  启动 Brython  \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n \n \n \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': '程式碼 \n \n \n  导入 Brython 库  \n \n \n  启动 Brython  \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};