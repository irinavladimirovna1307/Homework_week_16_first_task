# Задание: Форма регистрации с валидацией всех полей

### 1. Создайте HTML-страницу с формой для регистрации пользователя, содержащую следующие поля:
* Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Длина имени должна быть от 2 до 20 символов. Должно иметь атрибуты placeholder и required.
* Поле ввода электронной почты: обязательное поле, должно быть в формате email (содержать символ '@' и доменное имя). Должно иметь атрибуты placeholder и required.
* Поле ввода возраста: обязательное поле. Должно иметь атрибуты placeholder и required.
* Поле выбора пола: представленное в виде radio buttons для выбора между мужчиной и женщиной
* Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (select). Должно иметь атрибуты required и placeholder для выбора профессии. Варианты профессий: Врач, Программист, Учитель, Дизайнер, Инженер, Продавец, Другое.
* Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты placeholder, required, minlength и pattern.
* Поле checkbox, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут required.
* Кнопка отправки формы
### 2. Добавьте стили для формы
### 3. Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:
* Отменять действие по умолчанию для события submit
* Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
* Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
* Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
### 4. Бонусное задание: 
Реализуйте дополнительные обработчики событий focus и blur для каждого поля
