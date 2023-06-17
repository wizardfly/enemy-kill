/*
// - - - - - - - - - - - - - - - - - - -
// W F - G A M E - R U N - v001
// - - - - - - - - - - - - - - - - - - -
// #wf-202303152044
// #wf-202306141354
// - - - - - - - - - - - - - - - - - - -
// a WizrdFLY [dev front end web]
// https://wizrdfly.rf.gd
// - - - - - - - - - - - - - - - - - - -
*/
// A
// W I Z A R D f l y
// A P P L I C A T I O N
// - - - - - - - - - - - - - - - - - - - -
var Wapp = Wapp || {};
// - - - - - - - - - - - - - - - - - - - -
// M O D U L E
// - - - - - - - - - - - - - - - - - - - -
// FF (fully functions)
// - - - - - - - - - - - - - - - - - - - -
Wapp.FF = Wapp.FF || {};

(function (win, doc, Vars) {
    'use strict';

    /* private Vars */
    Vars = {
        // :: box start
        boxStart        : doc.querySelectorAll('.boxStart')[0],
        // :: button aside menu
        btnShowMenu     : doc.querySelectorAll('.btnMenu'),
        // :: aside menu
        asideMenu       : doc.querySelectorAll('.asideMenu')[0],
        // :: button options menu
        // btnMenu         : doc.querySelectorAll('.menu li a, .boxBtn ul li a'),
        btnMenu         : doc.querySelectorAll('.aMenu li a, .boxBtn ul li a'),
        // :: all sprites
        spr : {
            'trees' : {},
            'enemys' : {
                'stage01' : [
                    'medusa',
                    {
                        'life'          : 100,
                        'attack'        : 30,
                        'money'         : 25,
                        'star'          : 2,
                        'class'         : 'The Fighter Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage02' : [
                    'lizardman',
                    {
                        'life'          : 100,
                        'attack'        : 42,
                        'money'         : 30,
                        'star'          : 1,
                        'class'         : 'The Fighter Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage03' : [
                    'demon',
                    {
                        'life'          : 100,
                        'attack'        : 63,
                        'money'         : 42,
                        'star'          : 2,
                        'class'         : 'The Rangers Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage04' : [
                    'jinn',
                    {
                        'life'          : 100,
                        'attack'        : 57,
                        'money'         : 52,
                        'star'          : 2,
                        'class'         : 'The Magician Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage05' : [
                    'smallDragon',
                    {
                        'life'          : 100,
                        'attack'        : 12,
                        'money'         : 15,
                        'star'          : 1,
                        'class'         : 'The Rare Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage06' : [
                    'dragon',
                    {
                        'life'          : 100,
                        'attack'        : 82,
                        'money'         : 70,
                        'star'          : 3,
                        'class'         : 'The Rare Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
            },
            'bosses' : {
                'stage01' : [
                    'boss001',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage02' : [
                    'boss002',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage03' : [
                    'boss003',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage04' : [
                    'boss004',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage05' : [
                    'boss005',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ],
                'stage06' : [
                    'boss006',
                    {
                        'life'          : 100,
                        'attack'        : 80,
                        'money'         : 150,
                        'star'          : 3,
                        'class'         : 'The BOSS Class',
                        'description'   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            }
        },
        // :: box trees
        // boxTrees        : doc.querySelectorAll('.boxTrees')[0],
        // :: box trees LAST
        // boxTreesLast    : doc.querySelectorAll('.boxTreesLast')[0],
        // :: stages (stage01, stage02...)
        // stage           : 0,
        // :: amount enemys for stages (stage01 = 10, stage02...)
        enemysStages    : [
            // 10,
            // 20,
            // 30,
            // 40,
            // 50,
            // 60

            // DEUG (amount enemys by stage)
            2, // medusa
            3, // lizardman
            2, // demon
            3, // jinn
            2, // smallDragon
            3, // dragon
            // 3, // boss001
            // 1, // boss002
            // 1, // boss003
            // 1, // boss004
            // 1, // boss005
            // 1, // boss006
        ],
        // :: box lines (enemys)
        boxLines        : doc.querySelectorAll('.lines')[0],
        // :: positions create trees | enemys (lines 0 1 2)
        pos             : {
            'trees' : [
                0
            ],
            'enemys' : [
                350,
                350,
                350
            ],
            'bosses' : [
                550,
                550,
                550
            ]
        },
        // :: box move (enemys)
        boxMove         : doc.querySelectorAll('.lines .bgLine .box'),
        // :: enemys count
        enemysCount     : 0,
        // :: enemys details
        enemysDetails   : [
        ],
        // :: enemys life decrement (damage in CLICK)
        enemysDamage    : {
            // 'medusa'        : 15,
            // 'lizardman'     : 17,
            // 'jinn'          : 12,
            // 'demon'         : 10,
            // 'smallDragon'   : 8,
            // 'dragon'        : 4,
            // 'boss001'       : 8,
            // 'boss002'       : 8,
            // 'boss003'       : 8,
            // 'boss004'       : 8,
            // 'boss005'       : 8,
            // 'boss006'       : 8,
            'medusa'        : 80,
            'lizardman'     : 80,
            'jinn'          : 80,
            'demon'         : 80,
            'smallDragon'   : 80,
            'dragon'        : 80,
            'boss001'       : 80,
            'boss002'       : 80,
            'boss003'       : 80,
            'boss004'       : 80,
            'boss005'       : 80,
            'boss006'       : 80,
        },
        // :: player FULL details
        player          : {
            'profile'       : {
                'id'            : 1,
                'username'      : 'adonis vieira',
                'email'         : 'doniextreme@gmail.com'
            },
            // 'life'          : 2, // 3 (0, 1, 2)
            'life'          : 2, // 3 (0, 1, 2)
            'points'        : 0,
            'kills'         : 0,
            'damage'        : 1, // (damage * enemysDamage)
            'stage'         : 0
        },
        // :: points
        // points          : 0,
        // :: box points
        boxPoints       : doc.querySelectorAll('.boxPoints span')[0],
        // :: box stage
        boxStage        : doc.querySelectorAll('.boxStage span')[0],
        // :: box kills
        boxKills        : doc.querySelectorAll('.boxKills span')[0],
        // :: amount enemy kills
        // kills           : 0,
        // :: box bar
        bar             : doc.querySelectorAll('.spr.content.bar b')[0],
        // :: box life
        boxLife         : doc.querySelectorAll('.boxLife')[0],
        // :: box cards
        boxCards        : doc.querySelectorAll('.boxCards')[0],
        // :: cards
        cards           : {
            'star'          : doc.querySelectorAll('.boxCards .card .top .star')[0],
            'name'          : doc.querySelectorAll('.boxCards .card .top .name')[0],
            'image'         : doc.querySelectorAll('.boxCards .card .center')[0],
            'class'         : doc.querySelectorAll('.boxCards .card .bottom .type')[0],
            'description'   : doc.querySelectorAll('.boxCards .card .bottom .description')[0],
            'life'          : doc.querySelectorAll('.boxCards .card .bottom .attributes .aLife b')[0],
            'attack'        : doc.querySelectorAll('.boxCards .card .bottom .attributes .aAttack b')[0],
            'money'         : doc.querySelectorAll('.boxCards .card .bottom .attributes .aMoney b')[0]
        },
        // :: create elements (trees and enemys)
        createInterval  : '',
        // :: timer box cards
        timeCards       : '',
        // :: box MESSAGES
        boxMsg          : doc.querySelectorAll('.message')[0],
        // :: store next functions
        nextFunctions   : '',
        // :: store enemy type (enemy || boss)
        enemyType       : '',
        // :: DEBUG
        debug           : false, // true || false
    };

    /* init all functions */
    Wapp.FF.Init = function () {
        console.log('FF - fullyfunctions [init]');

        // check DEBUG
        if (Vars.debug === true) {
            console.log('D E B U G Enabled!');
        }

        // for all events listeners
        Wapp.FF.Listen();

        // animation MOVE boxes
        // Wapp.FF.Move();

        // console.log('ENABLED GAME START in: Wapp.FF.Create();');
        // create sprites
        // Wapp.FF.Create(); // ENABLED START GAME

        // randomize 'trees'
        // Wapp.FF.Randomize('trees');

        // randomize 'enemys'
        // Wapp.FF.Randomize('enemys');

        // Wapp.FF.ChangeColor();

        // setTimeout(function () {
        //     Wapp.FF.SetVars();
        //     Wapp.FF.SldServices();
        // }, 1000);
    };

    /* for all events listeners */
    Wapp.FF.Listen = function () {
        // console.log(':: Listen [fnc]');

        // :: options menu
        Wapp.FF.AddEvents('click', 'class', Vars.btnMenu, Wapp.FF.Menu, true);

        // :: check form access
        // Wapp.FF.AddEvents('click', 'el', Vars.inpCheckSubmit, Wapp.FF.VerifyForm, true);

        // :: show - hide aside menu
        Wapp.FF.AddEvents('click', 'class', Vars.btnShowMenu, Wapp.FF.ShowHide, true);

        // :: close message
        Wapp.FF.AddEvents('click', 'el', Vars.boxMsg, Wapp.FF.ShowHide, true);

        // :: show hide box
        // Wapp.FF.AddEvents('click', 'class', Vars.btnShowHide, Wapp.FF.ShowHide, true);

        // :: check form access
        // Wapp.FF.AddEvents('click', 'el', Vars.inpCheckSubmit, Wapp.FF.VerifyForm, true);
    };

    /* add one or more events */
    Wapp.FF.AddEvents = function (evt, type, el, fnc, bol) {
        // console.log(':: AddEvents [fnc]');

        // for all class
        if (type === 'class') {
            [].forEach.call(el, function (block) {
                block.addEventListener(evt, fnc, bol);
            });

        // for unique selector (element [0])
        } else {
            el.addEventListener(evt, fnc, bol);
        }
    };

    /* start game - splashscreen */
    Wapp.FF.StartGame = function () {
        // console.log(':: StartGame [fnc]');

        if (Vars.boxStart) {
            Vars.boxStart.classList.add('active');

            // remove splashscreen
            setTimeout(function () {
                Vars.boxStart.remove();

                // -----------------------------------
                // set PLAYER LIFE
                Wapp.FF.SetLife();
                // -----------------------------------

                // :::::::::::::::::::::::::::::::::::::::::::::::::::::::
                // E N A B L E D START GAME HERE
                // :::::::::::::::::::::::::::::::::::::::::::::::::::::::
                // show MESSAGES
                Wapp.FF.Messages('info', 'kill enemys', 'click to damage enemys');

                // set next functions
                Vars.nextFunctions = Wapp.FF.Create;

                // create sprites
                // Wapp.FF.Create(); // ENABLED START GAME
                // :::::::::::::::::::::::::::::::::::::::::::::::::::::::

                // enemys MOVE
                // [].forEach.call(Vars.boxMove, function (block) {
                //     block.classList.add('ani');
                // });
            }, 600);
        }
    };

    /* create boss */
    Wapp.FF.CreateBoss = function () {
        // console.log(':: CreateBoss [fnc]');

        // --------------------------------------------------
        // DEBUG (create enemys - all enemys spawn)
        // --------------------------------------------------
        if (Vars.debug === false) {
            // -----------------------------------------------
            // enemys RESET MOVE
            [].forEach.call(Vars.boxMove, function (block) {
                block.classList.remove('ani');

                // triggering reflow ELEMENT
                void block.offsetWidth;
            });
            // -----------------------------------------------
        }
        // --------------------------------------------------

        // console.log('remove ani BOXMOVE');

        /*if ((Vars.enemysStages.length - 1) === Vars.player['stage']) {
            console.log('STOP CREATE STAGE');
            return false;

        } else {
            Vars.player['stage'] ++;
            Wapp.FF.Create();
        }*/

        // console.log('CREATE BOSS');
        // console.log('stage', Vars.player['stage']);

        // :::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // E N A B L E D CREATE BOSS
        // :::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // console.log('CREATE ENEMY - boss');

        // randomize 'enemys'
        // Wapp.FF.Randomize('enemys', 'boss001');
        Wapp.FF.Randomize('enemys', 'boss');
        // :::::::::::::::::::::::::::::::::::::::::::::::::::::::

        // check position enemys
        Wapp.FF.CheckPosition();
    };

    /* set stage */
    Wapp.FF.SetStage = function () {
        // console.log(':: SetStage [fnc]');

        // --------------------------------------------------
        // DEBUG (create enemys - all enemys spawn)
        // --------------------------------------------------
        if (Vars.debug === false) {
            // -----------------------------------------------
            // enemys RESET MOVE
            [].forEach.call(Vars.boxMove, function (block) {
                block.classList.remove('ani');

                // triggering reflow ELEMENT
                void block.offsetWidth;
            });
            // -----------------------------------------------
        }
        // --------------------------------------------------

        // console.log('remove ani BOXMOVE');

        if ((Vars.enemysStages.length - 1) === Vars.player['stage']) {
            console.log('SetStage [fnc] >> STOP CREATE STAGE');
            return false;

        } else {
            // console.log('SetStage [fnc] >> START CREATE STAGE');
            Vars.player['stage'] ++;
            Wapp.FF.Create();
        }
    };

    /* remove enemys */
    Wapp.FF.RemoveEnemys = function () {
        // console.log(':: RemoveEnemys [fnc]');

        // STOP create
        clearInterval(Vars.createInterval);

        setTimeout(function () {
            var
                enemys = doc.querySelectorAll('.lines .bgLine .box .spr');

            Object.entries(enemys).forEach(([key, value]) => {
                // console.log('key', key);
                // console.log('value', value);

                value.remove();
            });

            // -----------------------------
            // STOP game
            // -----------------------------
            doc.body.classList.add('noPlay');
        }, 1000);
    };

    /* set player life */
    Wapp.FF.SetLife = function (type) {
        // console.log(':: SetLife [fnc]');

        var
            // htmlLife = '<i class="spr content life"></i>';
            htmlLife = '',
            x = 0;

        if (Vars.player['life'] < 0) {
            // console.log('GAME OVER - player life 0');

            // show MESSAGES
            Wapp.FF.Messages('error', 'game over', 'Illum ad asperiores quas earum, quidem deleniti');

            // set next functions
            // Vars.nextFunctions = Wapp.FF.RemoveEnemys;

            // remove enemys
            Wapp.FF.RemoveEnemys();

            return false;

        } else {
            // console.log('x', x);
            // console.log('Vars.player.life', Vars.player['life']);
            // console.log('type', type);

            if (type === 'more') {
                Vars.player['life'] ++;

            } else if (type === 'less') {
                Vars.player['life'] --;
            }

            // console.log('Vars.player.life', Vars.player['life']);

            for (x = 0; x <= Vars.player['life']; x ++) {
                // console.log(':: x', x);
                // console.log(':: Vars.player.life', Vars.player['life']);

                htmlLife += '<i class="spr content life"></i>';
            }

            // console.log('htmlLife', htmlLife);

            Vars.boxLife.innerHTML = htmlLife;
        }
    };

    /* create sprites */
    Wapp.FF.Create = function () {
        // console.log(':: Create [fnc]');

        // enemys MOVE
        [].forEach.call(Vars.boxMove, function (block) {
            block.classList.add('ani');
        });

        // console.log('add ani BOXMOVE');

        var
            // randInterval = '',
            count = 0,
            // limit = 5;
            limit = Vars.enemysStages[Vars.player['stage']];

        // console.log('Create STAGE', Vars.player['stage']);
        // console.log('Create LIMIT', limit);

        // set stage
        Vars.boxStage.innerHTML = (Vars.player['stage'] + 1);

        Vars.createInterval = setInterval(function () {
            // randomize 'trees'
            // Wapp.FF.Randomize('trees');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys');

            // increment
            count ++;

            // clear interval
            if (count >= limit) {
                clearInterval(Vars.createInterval);
                // console.log('clearInterval');

                // --------------------------------------------------
                // DEBUG (create enemys - all enemys spawn)
                // --------------------------------------------------
                if (Vars.debug === true) {
                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                    // AUTOMATIC set NEXT stage
                    Wapp.FF.SetStage();
                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                }
                // --------------------------------------------------

                // console.log('STAGES', Vars.enemysStages);
                // console.log('STAGES length', Vars.enemysStages.length);
            }
        }, 600);

        // check position enemys
        Wapp.FF.CheckPosition();
    };

    /* check position enemys */
    Wapp.FF.CheckPosition = function () {
        // console.log(':: CheckPosition [fnc]');

        var
            rect = '',
            posLimit = 170,
            checkPos = '',
            amountEl = '';

        checkPos = setInterval(function () {
            // console.log('RUN checkPos interval');

            [].forEach.call(doc.querySelectorAll('.lines .bgLine .box .spr'), function (el) {
                rect = el.getBoundingClientRect();

                // console.log('el', el);
                // console.log('rect.left', rect.left);
                // console.log('------------');

                if (rect.left <= posLimit) {
                    // console.log('DELETE THIS ELEMENT');
                    // console.log('el', el);
                    // console.log('rect.left', rect.left);
                    // console.log('------------');

                    // remove
                    el.remove();

                    // -----------------------------------
                    // set PLAYER LIFE
                    Wapp.FF.SetLife('less');
                    // -----------------------------------
                }
            });

            amountEl = doc.querySelectorAll('.lines .bgLine .box .spr').length;

            // :::::::::::::::::::::::::::::::::::::::::::::::::
            // game over
            // :::::::::::::::::::::::::::::::::::::::::::::::::
            if (Vars.player['life'] < 0) {
                // console.log('--------------------');
                // console.log('C R E A T E  M O D A L');
                // console.log('GAME OVER - checkPos');
                // console.log('--------------------');

                // show MESSAGES
                Wapp.FF.Messages('error', 'game over', 'Illum ad asperiores quas earum, quidem deleniti');

                // set next functions
                // Vars.nextFunctions = Wapp.FF.RemoveEnemys;

                // remove enemys
                Wapp.FF.RemoveEnemys();

                // --------------------
                // SHOW GAME OVER
                // --------------------

                clearInterval(checkPos);
                // console.log('STOP checkPos interval');

                return false;
            }
            // :::::::::::::::::::::::::::::::::::::::::::::::::

            if (amountEl === 0) {
                clearInterval(checkPos);
                // console.log('STOP checkPos interval');
                // console.log('SET STAGE');

                // ------------------------------------------------
                // check ENEMYTYPE last created (enemy || boss)
                // ------------------------------------------------
                if (Vars.enemyType !== 'enemy') {
                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                    // console.log('ENABLED NEXT STAGE in: Wapp.FF.SetStage();');

                    // show MESSAGES
                    Wapp.FF.Messages('success', 'next stage', 'stage: ' + (Vars.player['stage'] + 1) + '<br/>Illum ad asperiores quas earum, quidem deleniti');

                    // set next functions
                    Vars.nextFunctions = Wapp.FF.SetStage;

                    // set NEXT stage
                    // Wapp.FF.SetStage();
                    // :::::::::::::::::::::::::::::::::::::::::::::::::

                } else if (Vars.enemyType !== 'boss') {
                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                    // console.log('ENABLED BOSS in: Wapp.FF.CreateBoss();');

                    // show MESSAGES
                    Wapp.FF.Messages('alert', 'create boss', 'boss: ' + (Vars.player['stage'] + 1) + '<br/>Illum ad asperiores quas earum, quidem deleniti');

                    // set next functions
                    Vars.nextFunctions = Wapp.FF.CreateBoss;

                    // set NEXT stage
                    // Wapp.FF.CreateBoss();
                    // :::::::::::::::::::::::::::::::::::::::::::::::::

                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                    // SET POSITION CORRECT FOR NEW ENEMYS
                    // :::::::::::::::::::::::::::::::::::::::::::::::::
                }
            }
        }, 1000);
    };

    /* ShowHide */
    Wapp.FF.ShowHide = function (e) {
        // console.log(':: ShowHide [fnc]');

        if (e.currentTarget.classList.contains('message')) {
            Vars.boxMsg.classList.remove('active');

            if (Vars.nextFunctions) {
                Vars.nextFunctions();
                Vars.nextFunctions = '';
            }

        } else if (Vars.asideMenu) {
            if (Vars.asideMenu.classList.contains('active')) {
                Vars.asideMenu.classList.remove('active');

            } else {
                Vars.asideMenu.classList.add('active');
            }
        }

        e.preventDefault();
        return false;
    };

    /* menu */
    Wapp.FF.Menu = function (e) {
        // console.log(':: Menu [fnc]');

        var
            rndDeg = Math.floor(Math.random() * 359),
            // rndPercent = Math.floor(Math.random() * 99),
            percent = 100;

        // console.log('e.target', e.target);
        // console.log('e.currentTarget', e.currentTarget);
        // console.log('rndDeg', rndDeg);
        // console.log('rndPercent', rndPercent);

        // random colors
        if (e.currentTarget.classList.contains('btnRand')) {
            doc.body.style.filter = 'hue-rotate(' + rndDeg + 'deg)';

        // reset colors
        } else if (e.currentTarget.classList.contains('btnReset')) {
            doc.body.style.filter = 'unset';

        // invert colors
        } else if (e.currentTarget.classList.contains('btnInvert')) {
            doc.body.style.filter = 'invert(' + percent + '%)';

        // grayscale colors
        } else if (e.currentTarget.classList.contains('btnGray')) {
            doc.body.style.filter = 'grayscale(' + percent + '%)';

        // add tree
        } else if (e.currentTarget.classList.contains('btnTree')) {
            // randomize 'trees'
            // Wapp.FF.Randomize('trees');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemy')) {
            // randomize 'enemys'
            Wapp.FF.Randomize('enemys');

        // start game
        } else if (e.currentTarget.classList.contains('btnStart')) {
            // start game
            Wapp.FF.StartGame();

        // options game
        } else if (e.currentTarget.classList.contains('btnOptions')) {
            // create FUNCTION for button
            // console.log('OPTIONS SCREEN - options');
            // console.log('CREATE MODAL - options');

        // go to FACEBOOK
        } else if (e.currentTarget.classList.contains('btnFacebook')) {
            // create FUNCTION for button
            // console.log('OPTIONS SCREEN - facebook');
            // console.log('REDIRECT blank - facebook');

            // REDIRECT
            win.open(e.currentTarget.href, '_blank').focus();

        // go to HOME
        } else if (e.currentTarget.classList.contains('btnHome')) {
            // create FUNCTION for button
            // console.log('OPTIONS SCREEN - home');
            // console.log('REDIRECT blank - home');

            // REDIRECT
            win.open(e.currentTarget.href, '_blank').focus();
        }

        // ----------------------------------------
        // ADD players ENEMYS create
        // ----------------------------------------

        // add enemy
        if (e.currentTarget.classList.contains('btnEnemyMedusa')) {
            // console.log('CREATE ENEMY - medusa');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'medusa');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyDemon')) {
            // console.log('CREATE ENEMY - demon');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'demon');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyJinn')) {
            // console.log('CREATE ENEMY - jinn');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'jinn');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyDragon')) {
            // console.log('CREATE ENEMY - dragon');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'dragon');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemySmallDragon')) {
            // console.log('CREATE ENEMY - small dragon');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'smallDragon');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyLizardman')) {
            // console.log('CREATE ENEMY - lizardman');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'lizardman');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss001')) {
            // console.log('CREATE ENEMY - boss001');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss001');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss002')) {
            // console.log('CREATE ENEMY - boss002');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss002');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss003')) {
            // console.log('CREATE ENEMY - boss003');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss003');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss004')) {
            // console.log('CREATE ENEMY - boss004');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss004');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss005')) {
            // console.log('CREATE ENEMY - boss005');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss005');

        // add enemy
        } else if (e.currentTarget.classList.contains('btnEnemyBoss006')) {
            // console.log('CREATE ENEMY - boss006');

            // randomize 'enemys'
            Wapp.FF.Randomize('enemys', 'boss006');
        }

        e.preventDefault();
        return false;
    };

    /* randomize */
    // Wapp.FF.Randomize = function (sprType, boxTreesLast) {
    Wapp.FF.Randomize = function (sprType, enemyType) {
        // console.log(':: Randomize [fnc]');

        // console.log('Vars.spr', Vars.spr);

        // get amount
        // console.log('length trees', Object.keys(Vars.spr['trees']).length - 1);

        // get keys
        // Object.keys(Vars.spr['trees']).forEach(key => {
            // console.log(key, Vars.spr['trees'][key]);
        // });

        // ----------------------
        // RANDOMIZE LOGIC
        // ----------------------
        var
            // sprType = 'trees',
            sprSelected = '',
            cls = '',
            el = doc.createElement('I'),
            html = '',
            rnnd = Math.floor(Math.random() * Object.keys(Vars.spr[sprType]).length),
            lRnnd = '',
            // rndPos = Math.floor(Math.random() * 300);
            // rndPos = Math.random() * (max - min) + min;
            rndPos = parseInt(Math.random() * (400 - 100) + 100);

            // console.log('rndPos', rndPos);

            // console.log('Vars.spr[sprType]', Vars.spr[sprType]);

            // console.log('Object.keys(Vars.spr[sprType])', Object.keys(Vars.spr[sprType]));

            // console.log('Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]]', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]]);

            // console.log('rnnd', rnnd);

            // console.log('Object.keys(Vars.spr[sprType])[rnnd]', Object.keys(Vars.spr[sprType])[rnnd]);

            // console.log('Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]].length', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]].length);

            // [].forEach.call(Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]], function (box) {
                // console.log('box', box);
            // });

            // console.log('tree by stage', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]]);

            lRnnd = Math.floor(Math.random() * Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]].length);

            // console.log('trees LEN selected', lRnnd);

            // console.log('enemys object', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]]);

            sprSelected = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][lRnnd];

            // console.log(sprType + ' VALUE selected', sprSelected);

            // var sprSelectedOk = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][lRnnd];

            // console.log(sprType + ' VALUE selected correct', sprSelectedOk);

            // console.log('details 0', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][lRnnd][0]);
            // console.log('details 1', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][lRnnd][1]);

            // cls = 'spr.' + sprType + '.' + Object.keys(Vars.spr[sprType])[rnnd] + '.' + sprSelected;
            // cls = 'spr ' + sprType + ' ' + Object.keys(Vars.spr[sprType])[rnnd] + ' ' + sprSelected;

            // console.log('CLASS', cls);

            // ----------------------
            // create tree
            // ----------------------
            /*
            if (sprType === 'trees') {
                if (Vars.boxTrees) {
                    // cls = 'spr ' + sprType + ' ' + Object.keys(Vars.spr[sprType])[rnnd] + ' ' + sprSelected;
                    cls = 'spr ' + sprType + ' ' + Object.keys(Vars.spr[sprType])[Vars.player['stage']] + ' ' + sprSelectedOk;

                    // console.log('CLASS', cls);
                    // console.log('stage gen', Object.keys(Vars.spr[sprType])[rnnd]);
                    // console.log('stage num', Vars.player['stage']);
                    // console.log('>>> stage correct', Object.keys(Vars.spr[sprType])[Vars.player['stage']]);

                    el.className = cls;
                    // console.log('ELEMENT', el);

                    // set position (margin left)
                    Vars.pos['trees'][0] += rndPos;

                    el.style.left = Vars.pos['trees'] + 'px';

                    // console.log('EL >>>', el);

                    // create tree LAST
                    if (boxTreesLast === 'createLast') {
                        Vars.boxTreesLast.appendChild(el);

                    // create tree
                    } else {
                        Vars.boxTrees.appendChild(el);

                        // ----------------------
                        // create tree LAST
                        // ----------------------
                        // randomize 'trees' LAST
                        Wapp.FF.Randomize('trees', 'createLast');
                    }
                }
            */

            // ----------------------
            // create enemy
            // ----------------------
            // } else if (sprType === 'enemys') {
            if (sprType === 'enemys') {
                if (Vars.boxLines) {

                    // console.log('enemys 0 - type', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][0]);
                    // console.log('enemys 1 - details', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1]);

                    // enemys sprite
                    // sprSelected = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][0];
                    sprSelected = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][0];

                    // console.log('::: CREATE ENEMYS :::');
                    // console.log('Vars.player[stage]', Vars.player['stage']);
                    // console.log('Object.keys(Vars.spr[sprType])[Vars.player[stage]]', Object.keys(Vars.spr[sprType])[Vars.player['stage']]);
                    // console.log('Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player[stage]]]', Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]]);

                    // -----------------------------------------
                    // CHECK STAGES
                    // -----------------------------------------
                    // -----------------------------------------

                    // -----------------------------------------
                    // CHECK ENEMYS
                    // -----------------------------------------
                    // -----------------------------------------

                    // console.log(':: ENEMY Rand ::::::::::::');
                    // console.log('enemys sprSelected', sprSelected);
                    // console.log(':: /ENEMY Rand ::::::::::::');

                    // enemys details

                    // ---------------------
                    // CREATE specific ENEMY
                    // ---------------------
                    if (enemyType) {
                        // console.log('CREATE specific ENEMY');
                        // console.log('enemyType', enemyType);
                        // console.log('enemys list', Vars.spr[sprType][Object.keys(Vars.spr[sprType])]);
                        // console.log('obj enemys list', Object.keys(Vars.spr[sprType]));

                        // [].forEach.call(Vars.spr[sprType], function (enm) {
                        //     console.log('enm', enm);
                        // });

                        // Object.entries(Vars.spr[sprType]).forEach(([key, value]) => {
                        //     console.log('>> key', key);
                        //     console.log('>> value', value);
                        // });

                        // sprSelected = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][0];

                        // -------------------------
                        // -- ENEMY SPECIFIC OK
                        // -------------------------
                        // sprSelected = enemyType;
                        // -------------------------

                        // console.log(':: BOSS Rand ::::::::::::');
                        sprSelected = Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][0];
                        // console.log('bosses sprSelected', sprSelected);
                        // console.log(':: /BOSS Rand ::::::::::::');

                        // save enemy type (boss)
                        // Vars.enemyType = 'boss';

                        // console.log('::: BOSS enemyType :::');
                        // console.log('enemyType', enemyType);
                        // console.log('sprSelected', sprSelected);
                        // console.log('::: /BOSS enemyType :::');

                        // console.log('--------------------------');
                    }
                    // ---------------------

                    cls = 'spr rot ' + sprSelected + ' walk';
                    // cls = 'spr rot ' + sprSelectedOk[0] + ' walk';
                    // console.log('CLASS', cls);

                    el.className = cls;
                    // console.log('ELEMENT', el);

                    var
                        rnndLine = Math.floor(Math.random() * Vars.boxLines.querySelectorAll('li').length);

                    // for BOSSES
                    if (enemyType) {
                        // set position (margin left)
                        Vars.pos['bosses'][rnndLine] += rndPos;
                        el.style.left = Vars.pos['bosses'][rnndLine] + 'px';

                    // for ENEMYS
                    } else {
                        // set position (margin left)
                        Vars.pos['enemys'][rnndLine] += rndPos;
                        el.style.left = Vars.pos['enemys'][rnndLine] + 'px';
                    }

                    // set count array
                    el.dataset.pos = Vars.enemysCount;

                    // set enemy details
                    // Vars.enemysDetails[Vars.enemysCount] = [
                    //     {
                    //         'type' : sprSelected,
                    //         'life' : 100
                    //     }
                    // ];

                    // Vars.enemysDetails[Vars.enemysCount] = [
                    //     {
                    //         'type'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][0],
                    //         'life'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].life,
                    //         'attack'        : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].attack,
                    //         'money'         : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].money,
                    //         'star'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].star,
                    //         'class'         : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].class,
                    //         'description'   : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[rnnd]][1].description
                    //     }
                    // ];

                    // sprSelected = Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][0];

                        // sprSelected = enemyType;

                    // console.log('obj DETAILS ENEMY', Vars.spr[sprType]);
                    // console.log('DETAILS ENEMY', Vars.spr[sprType][enemyType]);

                    // ---------------------
                    // CREATE specific ENEMY
                    // ---------------------
                    if (enemyType) {

                        // --------------------------
                        // SET specific ENEMY DETAILS
                        // --------------------------
                        /*var
                            objEnemyDetails = [];

                        // Object.entries(Vars.spr[sprType]).forEach(([key, value]) => {
                        Object.entries(Vars.spr['bosses']).forEach(([key, value]) => {
                            console.log('key', key);
                            console.log('value', value);

                            // if (value[0] === enemyType) {
                            //     console.log('value', value[0]);
                            //     console.log('value', value[1]);

                            //     objEnemyDetails[0] = value[0];
                            //     objEnemyDetails[1] = value[1];
                            // }

                            if (key === Vars.player['stage']) {
                                console.log('value', value[0]);
                                console.log('value', value[1]);

                                objEnemyDetails[0] = value[0];
                                objEnemyDetails[1] = value[1];
                            }
                        });*/
                        // --------------------------

                        // console.log('>>> objEnemyDetails', objEnemyDetails);

                        // Vars.enemysDetails[Vars.enemysCount] = [
                        //     {
                        //         'type'          : objEnemyDetails[0],
                        //         'life'          : objEnemyDetails[1].life,
                        //         'attack'        : objEnemyDetails[1].attack,
                        //         'money'         : objEnemyDetails[1].money,
                        //         'star'          : objEnemyDetails[1].star,
                        //         'class'         : objEnemyDetails[1].class,
                        //         'description'   : objEnemyDetails[1].description
                        //     }
                        // ];

                        // save enemy type (boss)
                        Vars.enemyType = 'boss';

                        Vars.enemysDetails[Vars.enemysCount] = [
                            {
                                'type'          : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][0],
                                'life'          : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].life,
                                'attack'        : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].attack,
                                'money'         : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].money,
                                'star'          : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].star,
                                'class'         : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].class,
                                'description'   : Vars.spr['bosses'][Object.keys(Vars.spr['bosses'])[Vars.player['stage']]][1].description
                            }
                        ];

                    } else {
                        // save enemy type (enemy)
                        Vars.enemyType = 'enemy';

                        Vars.enemysDetails[Vars.enemysCount] = [
                            {
                                'type'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][0],
                                'life'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].life,
                                'attack'        : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].attack,
                                'money'         : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].money,
                                'star'          : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].star,
                                'class'         : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].class,
                                'description'   : Vars.spr[sprType][Object.keys(Vars.spr[sprType])[Vars.player['stage']]][1].description
                            }
                        ];
                    }

                    // console.log('??? enemysDetails', Vars.enemysDetails);

                    // add event CLICK
                    el.addEventListener('click', Wapp.FF.ClickEnemy, true);

                    // add life bar
                    html = '';
                    html += '<span class="bLife">';
                        html += '<b style="width:100%;"></b>';
                    html += '</span>';

                    el.innerHTML = html;

                    // console.log('EL >>>', el);

                    // Vars.boxLines.appendChild(el);
                    Vars.boxLines.querySelectorAll('li')[rnndLine].querySelectorAll('div')[0].appendChild(el);

                    // increment enemys
                    Vars.enemysCount ++;
                }
            }
        // ----------------------
    };

    /* click enemy */
    Wapp.FF.ClickEnemy = function (e) {
        // console.log(':: ClickEnemy [fnc]');

        // console.log('e', e);
        // console.log('e.target', e.target);
        // console.log('e.target.dataset.pos', e.target.dataset.pos);

        // console.log('Vars.enemysDetails', Vars.enemysDetails[parseInt(e.target.dataset.pos)]);
        // console.log('enemysDetails type', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type);
        // console.log('enemysDetails life', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life);
        // console.log('enemysDetails attack', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].attack);
        // console.log('enemysDetails money', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].money);

        // console.log('enemysDetails star', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].star);
        // console.log('enemysDetails class', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].class);
        // console.log('enemysDetails description', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].description);

        // console.log('enemy damage click', Vars.enemysDamage[Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type]);

        // show popup DETAILS
        var
            // cards = {
            //     'star'          : doc.querySelectorAll('.boxCards .card .top .star')[0],
            //     'name'          : doc.querySelectorAll('.boxCards .card .top .name')[0],
            //     'image'         : doc.querySelectorAll('.boxCards .card .center')[0],
            //     'class'         : doc.querySelectorAll('.boxCards .card .bottom .type')[0],
            //     'description'   : doc.querySelectorAll('.boxCards .card .bottom .description')[0],
            //     'life'          : doc.querySelectorAll('.boxCards .card .bottom .attributes .aLife b')[0],
            //     'attack'        : doc.querySelectorAll('.boxCards .card .bottom .attributes .aAttack b')[0],
            //     'money'         : doc.querySelectorAll('.boxCards .card .bottom .attributes .aMoney b')[0]
            // },
            htmlStar = '',
            amountStar = 0,
            dmg = '',
            life = '',
            percent = '';

        // console.log('cards', cards);
        // console.log('AMOUNT star', parseInt(Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].star));

        for (amountStar = 0; amountStar < Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].star; amountStar ++) {
            htmlStar += '<i class="spr content star"></i>';
        }

        // var
        dmg = parseInt(Vars.enemysDamage[Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type]);
        life = parseInt(Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life);
        percent = 0;

        Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life = (parseInt(life) - parseInt(dmg));

        // console.log(':: ClickEnemy');
        // console.log('dmg', dmg);
        // console.log('life', life);
        // console.log('enemysDetails', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0]);
        // console.log('enemysDetails life', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life);
        // console.log('enemysDamage', Vars.enemysDamage[Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type]);

        // console.log('enemy life', Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life);

        // show box card
        Vars.boxCards.classList.add('active');

        if (Vars.timeCards) {
            clearTimeout(Vars.timeCards);
        }

        // hide box card
        Vars.timeCards = setTimeout(function () {
            Vars.boxCards.classList.remove('active');
        }, 3000);

        // ----------------------------
        // DEATH ENEMY
        // ----------------------------
        if ((life <= dmg) || (Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life <= 0))  {
            // e.target.classList.remove('walk');
            // e.target.classList.add('death');

            // ---------
            e.target.remove();
            // ---------

            setTimeout(function () {
                // e.target.classList.add('opc');

                setTimeout(function () {
                    // e.target.remove();

                    // hide box card
                    Vars.boxCards.classList.remove('active');
                }, 400);
            }, 800);

            percent = 0;

            // set points
            Vars.player['points'] = parseInt(Vars.player['points'] + parseInt(Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].money));
            Vars.boxPoints.innerHTML = Vars.player['points'];

            // set kills
            Vars.player['kills'] ++;
            Vars.boxKills.innerHTML = Vars.player['kills'];

            // set percent bar
            var
                pBar = parseInt((Vars.player['points'] * 100) / 1000);

            Vars.bar.style.width = pBar + '%';

            // :::::::::::::::::::::::::::::::::::::::::::::::::
            // SHOW / HIDE popup enemy DETAILS
            // :::::::::::::::::::::::::::::::::::::::::::::::::

            e.preventDefault();
            // return false;

        } else {
            percent = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life;
        }

        e.target.querySelectorAll('span b')[0].style.width = (percent + '%');

        Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life = percent;

        // set DETAILS popup
        Vars.cards['star'].innerHTML = htmlStar;
        Vars.cards['name'].innerHTML = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type;
        Vars.cards['image'].innerHTML = '<i class="spr ' + Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].type + ' idle"></i>';
        Vars.cards['class'].innerHTML = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].class;
        Vars.cards['description'].innerHTML = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].description;
        Vars.cards['life'].style.width = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].life + '%';
        Vars.cards['attack'].style.width = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].attack + '%';
        Vars.cards['money'].style.width = Vars.enemysDetails[parseInt(e.target.dataset.pos)][0].money + '%';

        // ----------------------------
        // style DAMAGE enemy
        // ----------------------------
        // console.log('SET DAMAGE animation - enemy', e.currentTarget);

        /*var
            dmgAnimation = '<i class="damaged"></i>';

        e.target.innerHTML = dmgAnimation;

        setTimeout(function () {
            e.target.innerHTML = '';
        }, 800);*/
        // ----------------------------
    };

    /* messages */
    Wapp.FF.Messages = function (type, title, description) {
        // console.log(':: Messages [fnc]');

        var
            html = '',
            objTypes = {
                'success'   : '<i class="spr content msgSuccess"></i>',
                'error'     : '<i class="spr content msgError"></i>',
                'info'      : '<i class="spr content msgInfo"></i>',
                'alert'     : '<i class="spr content msgAlert"></i>'
            };

        // console.log('type', type);
        // console.log('title', title);
        // console.log('description', description);

        if (Vars.boxMsg) {
            // create message
            html += '<div>';
                // html += '<i class="spr content msgSuccess"></i>';
                // html += '<i class="spr content msgError"></i>';
                // html += '<i class="spr content msgInfo"></i>';
                // html += '<i class="spr content msgAlert"></i>';

                html += objTypes[type];
                html += '<p>';
                    html += '<strong>';
                        // html += 'Lorem ipsum dolor';
                        html += title;
                    html += '</strong>';
                    // html += 'Illum ad asperiores quas earum, quidem deleniti, velit beatae blanditiis accusantium expedita.';
                    html += description;
                html += '</p>';
            html += '</div>';

            // append html
            Vars.boxMsg.innerHTML = html;

            // set message style
            Vars.boxMsg.className = 'message';
            Vars.boxMsg.classList.add(type, 'active');
        }
    };

    // ----------------------------
    /* Verify Form */
    /*
    Wapp.FF.VerifyForm = function (e) {
        console.log(':: VerifyForm [fnc]');

        var
            data = '',
            nObj = {},
            form = doc.getElementById(e.target.dataset.form),
            error = false,
            regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (form) {
            // all elements
            [].forEach.call(form.querySelectorAll('input[type="text"], input[type="checkbox"], input[type="radio"], input[type="email"], input[type="hidden"], select, textarea'), function (el) {

                // for inputs RADIO
                if (el.type === 'radio') {
                    if (el.checked) {
                        // insert radio
                        data += el.name + '=' + el.value + '&';
                    }
                }

                // required
                if (el.required) {
                    // type hidden
                    if (el.type === 'hidden') {
                        // console.log('input hidden', el);

                    } else {
                        if (el.value === '') {
                            el.classList.add('error');
                            error = true;

                        } else {
                            el.classList.remove('error');

                            // EMAIL
                            // if (el.name === 'email') {
                            if (el.classList.contains('inpEmail')) {
                                if (!regEmail.test(el.value)) {
                                    el.classList.add('error');
                                    error = true;

                                } else {
                                    el.classList.remove('error');
                                }

                            // PHONE
                            } else if (el.name === 'TELEFONE') {
                                // if (el.value.length < (el.maxLength - 1)) {
                                if (el.value.length < el.maxLength) {
                                    el.classList.add('error');
                                    error = true;

                                } else {
                                    el.classList.remove('error');
                                }
                            }
                        }
                    }

                    // not insert radio
                    if (el.type != 'radio') {
                        data += el.name + '=' + el.value + '&';
                    }
                }
            });

            // console.log('ERROR', error);
            // console.log('data', data);

            if (error) {
                e.preventDefault();
                return false;
            }

            // send data
            Wapp.FF.SendData(e, form.method, form.action, data, form, e.target);
        }

        e.preventDefault();
        return false;
    };
    */

    /* send data ajax */
    /*
    Wapp.FF.SendData = function (e, method, url, data, form, button) {
        // console.log(':: SendData [fnc]');

        console.log('-------------------');
        console.log('e', e);
        console.log('method', method);
        console.log('url', url);
        console.log('data', data);
        console.log('form', form);
        console.log('button', button);
        console.log('-------------------');

        // button SEND disabled
        if (button) {
            button.disabled = true;
        }

        var
            ajax = new XMLHttpRequest();

        // AJAX
        ajax.open(method, url, true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(data);

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200){
                    // ajax: SUCCESS
                    // *****************
                    console.log('AJAX - SEND Successfully!',  ajax.responseText);

                    Wapp.FF.AjaxComplete(e, form, ajax.responseText, button, 'SUCCESS', data);

                } else {
                    // ajax: ERROR
                    // ***********
                    console.log('AJAX - SEND Error!',  ajax.returnText);

                    Wapp.FF.AjaxComplete(e, form, ajax.responseText, button, 'ERROR', data);
                }
            }
        };

        e.preventDefault();
        return false;
    };
    */

    /* ajax complete */
    /*
    Wapp.FF.AjaxComplete = function (e, form, obj, button, status, data) {
        console.log(':: AjaxComplete [fnc]');

        console.log('-------------------');
        console.log('e', e);
        console.log('form', form);
        console.log('obj', obj);
        console.log('button', button);
        console.log('status', status);
        console.log('data', data);
        console.log('-------------------');

        // button SEND disabled
        if (button) {
            button.disabled = false;
        }

        // reset form
        // form.reset();

        // show msg
        Wapp.FF.Message('Mensagem de retorno', 'mensagem manual text', obj, form, status);
    };
    */

    /* Message */
    /*
    Wapp.FF.Message = function (title, message, obj, form, status) {
        console.log(':: Message [fnc]');

        console.log('-------------------');
        console.log('title', title);
        console.log('message', message);
        console.log('obj', obj);
        console.log('form', form);
        console.log('status', status);
        console.log('-------------------');

        var
            box = doc.querySelectorAll('.section.message')[0],
            newTitle = '',
            newContent = '',
            styleStatus = '';

        // verify return
        // SUCCESS [send]
        if (status === 'SUCCESS') {
            // set title
            newTitle = 'Formulário enviado com sucesso!';

            // set content
            newContent = 'Agradecemos a confirmação de sua presença';

            // set style box
            styleStatus = 'successSend';

        // ERROR [send]
        } else if (status === 'ERROR') {
            // set title
            newTitle = 'Ocorreu um erro ao enviar o form!';

            // set content
            newContent = '';

            // set style box
            styleStatus = 'errorSend';
        }

        // populate infos
        if (box) {
            // title
            if (box.querySelectorAll('h3.title')[0]) {
                box.querySelectorAll('h3.title')[0].innerHTML = newTitle;
            }

            // content
            if (box.querySelectorAll('p')[0]) {
                box.querySelectorAll('p')[0].innerHTML = newContent;
            }
        }

        // set style status
        box.classList.add(styleStatus);

        // show box
        box.classList.add('active');

        setTimeout(function () {
            // hide box
            box.classList.remove('active');

            // reset style status
            box.classList.remove(styleStatus);
        }, 4000);
    };
    */
    // ----------------------------

    /* instantiation this module in window load */
    win.addEventListener('DOMContentLoaded', Wapp.FF.Init, true);

    /* manual init */
    // Wapp.FF.Init();
})(window, document, 'Private');