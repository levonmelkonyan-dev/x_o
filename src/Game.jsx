import React, { Component } from 'react';

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            block: new Array(9).fill(null),
            count: 0,
            x_sty: "text-shadow: 0 0 15px deeppink, 0 0 15px deeppink, 0 0 15px deeppink, 0 0 15px deeppink;         -webkit-text-stroke: 5px #ff9dfac6; color: deeppink;",
            o_sty: "text-shadow: 0 0 15px dodgerblue, 0 0 15px dodgerblue, 0 0 15px dodgerblue, 0 0 15px dodgerblue; -webkit-text-stroke: 5px #9dceff;   color: dodgerblue;",
            x_win: 0,
            o_win: 0,
            rot_z: 0,
            t_p  : 50,
            l_t  : 50,
            h_t  : 0,
            t_y  : 50,
            t_x  : 50,
            o_y  : 0.5
        }
    }

   
    click_block = (index, event) => {
        if (this.state.block[index] === null) { 
            this.setState({ count: this.state.count + 1 });
            this.state.block[index] = (this.state.count % 2 === 0) ? "X" : "0";

            if (this.state.block[index] === "X") { 
                event.target.children[0].setAttribute("style", this.state.x_sty);
            }
            else {
                event.target.children[0].setAttribute("style", this.state.o_sty);
            }

           
            if (this.state.count === 8) {
                setTimeout(() => {
                    this.setState({ block: new Array(9).fill(null), count: 0 });
                }, 3000);
            }
        }

        this.program();
    }

    winer_list = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 4, 8],
        [2, 4, 6],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    
    program = function () {
        const x_o = (this.state.count % 2 === 0) ? "X" : "0";
        const block = this.state.block;

        for (let i = 0; i < this.winer_list.length; i++) {
            let line = this.winer_list[i]; 

            if (block[line[0]] === x_o && block[line[1]] === x_o && block[line[2]] === x_o) {
                setTimeout(() => {
                    this.setState({ block: new Array(9).fill(null), count: 0 });
                }, 3000);

            
                if(x_o.includes("X")) {
                    this.setState({ x_win : this.state.x_win + 1 });
                }
                
                else {
                    this.setState({ o_win : this.state.o_win + 1 });
                }

                const program_for_large = () => {
                    setTimeout(() => { this.setState({ o_y : 1, h_t : 95}) }, 1000);
                }

               
                setTimeout(() => {
                    if(block[this.winer_list[0][0]] === x_o && block[this.winer_list[0][1]] === x_o && block[this.winer_list[0][2]] === x_o) { 
                        this.setState({ t_p : 16, rot_z : 90});
                        program_for_large();
                    }

                    if(block[this.winer_list[1][0]] === x_o && block[this.winer_list[1][1]] === x_o && block[this.winer_list[1][2]] === x_o) { 
                        this.setState({ t_p : 50, rot_z : 90});
                        program_for_large();
                    }

                    if(block[this.winer_list[1][0]] === x_o && block[this.winer_list[1][1]] === x_o && block[this.winer_list[1][2]] === x_o) { 
                        this.setState({ t_p : 50, rot_z : 90});
                        program_for_large();
                    }         

                    if(block[this.winer_list[2][0]] === x_o && block[this.winer_list[2][1]] === x_o && block[this.winer_list[2][2]] === x_o) { 
                        this.setState({ t_p : 85, rot_z : 90});
                        program_for_large();
                    }
                    if(block[this.winer_list[3][0]] === x_o && block[this.winer_list[3][1]] === x_o && block[this.winer_list[3][2]] === x_o) { 
                        this.setState({ rot_z : -45});
                        program_for_large();

                        setTimeout(() => {
                            this.setState({ h_t : 130});
                        }, 1000);
                    }         

                     if(block[this.winer_list[4][0]] === x_o && block[this.winer_list[4][1]] === x_o && block[this.winer_list[4][2]] === x_o) { 
                        this.setState({ rot_z : 45});
                        program_for_large();

                        setTimeout(() => {
                            this.setState({ h_t : 130});
                        }, 1000);
                    }         

                     if(block[this.winer_list[5][0]] === x_o && block[this.winer_list[5][1]] === x_o && block[this.winer_list[5][2]] === x_o) { 
                        this.setState({ rot_z : 180, l_t : 16});
                        program_for_large();

                        
                    }         

                    if(block[this.winer_list[6][0]] === x_o && block[this.winer_list[6][1]] === x_o && block[this.winer_list[6][2]] === x_o) { 
                        this.setState({ rot_z : 180, l_t : 50});
                        program_for_large();

                        
                    }         

                    if(block[this.winer_list[7][0]] === x_o && block[this.winer_list[7][1]] === x_o && block[this.winer_list[7][2]] === x_o) { 
                        this.setState({ rot_z : 180, l_t : 84});
                        program_for_large();

                        
                    }        



                    setTimeout(() => {
                        this.setState({ o_y : 0, h_t : 0});

                        setTimeout(() => {
                           this.setState({ rot_z: 0, t_p  : 50, l_t  : 50, t_y  : 50, t_x  : 50 }) 
                        }, 1000);
                    }, 2500);

                }, 500);
            }
        }
    }


    render() {
        return (
            <div className="game">
                <h3>{this.state.x_win} / X</h3>
                <div className="box">
                    <div className="end" style={{
                                                    transform : `translate(-${this.state.t_x}%, -${this.state.t_y}%) rotateZ(${this.state.rot_z}deg)`,
                                                    top       : this.state.t_p + "%",
                                                    left      : this.state.l_t + "%",
                                                    height    : this.state.h_t + "%",
                                                    opacity   : this.state.o_y,
                                                }}></div>
                    
                
                    {
                        this.state.block.map((elem, index) => {
                            return (
                                <div className="block" key={index} onClick={(event) => { this.click_block(index, event) }}>
                                    <p>{elem}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>O \ {this.state.o_win}</h3>
            </div>
        )
    }
}