
const updateMember = (req, res) => {
  const found = member.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const indx = member.findIndex(
      (member) => member.id === parseInt(req.params.id)
    );
    member[indx].name = req.body.name;
    member[indx].email = req.body.email;
    res.json(member);
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

export default updateMember;
