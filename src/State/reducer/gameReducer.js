export const gameReducer=(state={
    cricketTeam:[],
    bulb:false,
},action)=>{
    if(action.type==="bulb"){
        return{
            ...state,
            bulb:!state.bulb,
        }
    }
    if(action.type==="cricketTeam"){
        return{
            ...state,
            cricketTeam:[action.payload,...state.cricketTeam]
        }
    }
    
    return state;
}