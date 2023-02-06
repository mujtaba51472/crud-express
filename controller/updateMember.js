import member from "../member/member.js";

const updateMember = (req, res) => {
  member.forEach((member , i) => {
    if (member.id === parseInt(req.params.id)) {
      const updMember = { ...member, ...req.body };
      console.log(updMember);
      member[i] = updMember;
      res.json({ msg: "Member updated", updMember });
    }
  });
};

export default updateMember;
