Feature: Testing Main page for "Oz" website

    Background:
        Given I navigate to the "https://oz.by/" page

    Scenario Outline: Check names of links on the main slider
        Then I expect element <number> "Main Page > Slider Links" should be equal "<linkText>"
        Examples:
            | number | linkText           |
            | 1      | Новый Год          |
            | 2      | Для неё            |
            | 3      | Косметика −40%     |
            | 4      | Шкатулки           |
            | 5      | MONMU −40%         |
            | 6      | Детям              |
            | 7      | Для него           |
            | 8      | Прикольные подарки |
            | 9      | Техника −30%       |
            | 10     | Для праздника      |



    Scenario Outline: Check names of tabs on the top panel is the right corner
        Then I expect element <number> "Main Page > Top Panel Items" should be equal "<linkText>"
        Examples:
            | number | linkText           |
            | 1      | Оплата             |
            | 2      | Доставка           |
            | 3      | Помощь             |
            | 4      | Бонусная программа |

    Scenario Outline: Check names of stationery categories in block on the main page
        Then I expect element <number> "Main Page > Stationery Main Menu" should be equal "<linkText>"
        Examples:
            | number | linkText            |
            | 1      | Канцелярские товары |
            | 2      | Обучающие программы |

    Scenario Outline: Check names of books categories in block on the main page
        Then I expect element <number> "Main Page > Books Main Menu" should be equal "<linkText>"
        Examples:
            | number | linkText                    |
            | 1      | Бизнес-литература           |
            | 2      | Детские книги               |
            | 3      | Кнігі на беларускай мове    |
            | 4      | Нехудожественная литература |
            | 5      | Художественная литература   |