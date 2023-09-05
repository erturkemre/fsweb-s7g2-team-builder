import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Members = (props) => {
  const { members ,editMember } = props;
  return (
    <div>
      {members.map((member) => (
        <Card
          body
          style={{
            width: "50%",
            margin: "auto ",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{member.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            {member.email}
            </CardSubtitle>
            <CardText>
            {member.rol}
            </CardText>
            <Button onClick={()=>editMember(member)}>Edit</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Members;
