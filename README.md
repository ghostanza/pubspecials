# thechris
I frequently check the specials for my local pub ([Christopher's in Cambridge, MA](http://christopherscambridge.com.s122913.gridserver.com/)), so I figured I'd just make a little Node.js script so I can check it from the command line instead of going to the site, so I don't have to leave my terminal while working.

## Basic Usage
The script can be used as is, without any flags and it will output the current specials listed on the Christopher's website.
The output first displays when the specials were last updated. After that it will include things like **Appetizers**, **Big Plates/Entrees**, **Soup Specials**, **Burger Special**, **Fish/Catch of The Day**, **Cocktail Specials**, and **Beer Specials**
```
$ node thechris.js


+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


APPETIZERS
====================
Chicken Teriyaki Dumplings
with sweet chili sauce
- 8.95


BIG PLATES
====================
Spinach, Mushroom and Pepperjack-Stuffed Chicken
wrapped in bacon and served with basil scalloped potatoes, sauteed carrots and French green beans, and a red wine pan sauce
- 14.95

Roasted Red Pepper and Goat Cheese Ravioli
with cherry tomatoes, kale, caramelized onions and a pesto cream sauce
- 14.95


SOUP
====================
Beef Chili
with melty cheese and tortilla chips
- 8.95


BURGER
====================
Salmon Burger
topped with pickled cabbage, avocado and caper aioli
- 12.95


CATCH OF THE DAY
====================
Pan Seared Tuna
with sauteed broccoli, jasmine rice and a ponzu sauce
- 15.95


COCKTAILS
====================
Daisy De Santiago
Bacardi Rum, Yellow Chartreuse, fresh lime and simple syrup
- 8.95

Okey Dokey Artichokey #2
a classic Negroni with a twist:  Cynar Artihcoke Liqueur, Tanqueray 10 and sweet vermouth with an orange twist
- 8.95


BEER SPECIALS
====================

--------------------
 CIDER
--------------------
Citizen Cider Tulsi
Downeast Original Stout

--------------------
 HOPPY
--------------------
Alpine Beer Co Nelson IPA
Cisco Whale's Tale Pale Ale
Fiddlehead India Pale Ale
Founders Centennial IPA
Green Flash Le Freak
Harpoon IPA
Smuttynose FinestKind IPA
Troegs Perpetual IPA
Whaler's Brewing Company RISE

--------------------
 LIGHTER SIDE
--------------------
Allagash White
Firestone Walker Pivo Hoppy Pils
Jack's Abby Calyptra Pale Lager
Lagunitas Czech Pils
Notch Session Pils

--------------------
 MALTY/DARK
--------------------
Brewery Vivant Big Red COQ
Founders Canadian Breakfast Stout
Guinness Irish Stout
Ipswich Oatmeal Stout
Night Shift Awake Coffee Porter
Springdale Brigadeiro Breakfast Stout

--------------------
 SOUR
--------------------
Avery El Gose
Zero Gravity Berine Weisse

--------------------
 CANS/BOTTLES
--------------------
Oskar Blues Dale's Pale Ale
Troegs Blizzard of Hops IPA

```

## Option Flags
You may also provide options/flags to the script if you only want to fetch and view certain specials.

#### `-a` - Appetizers
```
$ node thechris.js -a
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


APPETIZERS
====================
Chicken Teriyaki Dumplings
with sweet chili sauce
- 8.95

```

#### `-b` - Beer Specials
```
$ node thechris.js -b
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


BEER SPECIALS
====================

--------------------
 CIDER
--------------------
Citizen Cider Tulsi
Downeast Original Stout

--------------------
 HOPPY
--------------------
Alpine Beer Co Nelson IPA
Cisco Whale's Tale Pale Ale
Fiddlehead India Pale Ale
Founders Centennial IPA
Green Flash Le Freak
Harpoon IPA
Smuttynose FinestKind IPA
Troegs Perpetual IPA
Whaler's Brewing Company RISE

--------------------
 LIGHTER SIDE
--------------------
Allagash White
Firestone Walker Pivo Hoppy Pils
Jack's Abby Calyptra Pale Lager
Lagunitas Czech Pils
Notch Session Pils

--------------------
 MALTY/DARK
--------------------
Brewery Vivant Big Red COQ
Founders Canadian Breakfast Stout
Guinness Irish Stout
Ipswich Oatmeal Stout
Night Shift Awake Coffee Porter
Springdale Brigadeiro Breakfast Stout

--------------------
 SOUR
--------------------
Avery El Gose
Zero Gravity Berine Weisse

--------------------
 CANS/BOTTLES
--------------------
Oskar Blues Dale's Pale Ale
Troegs Blizzard of Hops IPA

```

#### `-c` - Cocktail Specials
```
$ node thechris.js -c
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


COCKTAILS
====================
Daisy De Santiago
Bacardi Rum, Yellow Chartreuse, fresh lime and simple syrup
- 8.95

Okey Dokey Artichokey #2
a classic Negroni with a twist:  Cynar Artihcoke Liqueur, Tanqueray 10 and sweet vermouth with an orange twist
- 8.95

``` 

`-f` - Fish ("Catch of the Day")
```
$ node thechris.js -f
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


CATCH OF THE DAY
====================
Pan Seared Tuna
with sauteed broccoli, jasmine rice and a ponzu sauce
- 15.95

```

#### `-g` - Burger Special
```
$ node thechris.js -g
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


BURGER
====================
Salmon Burger
topped with pickled cabbage, avocado and caper aioli
- 12.95

```

#### `-p` - "Big Plates" / Entrees
```
$ node thechris.js -p
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


BIG PLATES
====================
Spinach, Mushroom and Pepperjack-Stuffed Chicken
wrapped in bacon and served with basil scalloped potatoes, sauteed carrots and French green beans, and a red wine pan sauce
- 14.95

Roasted Red Pepper and Goat Cheese Ravioli
with cherry tomatoes, kale, caramelized onions and a pesto cream sauce
- 14.95

```

#### `-s` - Soup Special
```
$ node thechris.js -s
UPDATED ON 1/16/2018
+++++++++++++++++++++++


SOUP
====================
Beef Chili
with melty cheese and tortilla chips
- 8.95

```

### Combined Flags
You can also combine flags to fetch only what you want. You may either call the flags separately (ex: `node thechris.js -a -c`) or together (ex: `node thechris.js -ac`).

***EXAMPLE:***
```
$ node thechris.js -ac
+++++++++++++++++++++++
UPDATED ON 1/16/2018
+++++++++++++++++++++++


APPETIZERS
====================
Chicken Teriyaki Dumplings
with sweet chili sauce
- 8.95


COCKTAILS
====================
Daisy De Santiago
Bacardi Rum, Yellow Chartreuse, fresh lime and simple syrup
- 8.95

Okey Dokey Artichokey #2
a classic Negroni with a twist:  Cynar Artihcoke Liqueur, Tanqueray 10 and sweet vermouth with an orange twist
- 8.95

```

## Help
If you need help, ***the `-h` flag will override any other flags*** and display the help information
```
$ node thechris.js -h

      Need Help?
      Do not use any flags if you want to see all of the specials.

      FLAGS (can be combined):
      [-a]: appetizers
      [-b]: beer
      [-c]: cocktails
      [-f]: catch of the day
      [-g]: burger
      [-p]: big plates
      [-s]: soup

      HELP:
      [-h]: Will override any other flags and display this help menu

      EXAMPLES:
        node thechris.js -ac (will return appetizers and cocktails)
        node thechris.js -p -s (big plates / soup)

```
