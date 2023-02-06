import member from "../member/member.js";
import { v4 as uuidv4 } from 'uuid';

const addMember = (req, res) => {

    const comingMember = {
        ...req.body , 
        id: 3

    }
    member.push(comingMember)
  res.json(member);
};

export default addMember;
