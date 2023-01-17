import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Divider, Grid, Header, Item, Reveal, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";

interface Props {
    profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props) {
    return (
        <Segment>
            <Grid>
                <Grid.Column verticalAlign='middle' textAlign='center' width={8}>
                    <Item.Group>
                        <Item.Image circular size='massive' avatar src={ profile.image || '/assets/user.png'} />
                        <Item.Content verticalAlign='middle'>
                            <Header as='h1' content={profile.displayName} />
                        </Item.Content>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width={8}>
                    <Statistic.Group widths={2}>
                        <Statistic label='Followers' value='5' />
                        <Statistic label='Following' value='42' />
                    </Statistic.Group>
                    <Divider />
                    <Reveal animated='move' >
                        <Reveal.Content visible style={{width: '100%'}}>
                            <Button  fluid color='teal' content='Following' />
                        </Reveal.Content>
                        <Reveal.Content hidden style={{width: '100%'}}>
                            <Button 
                            fluid
                            basic
                            color={true ? 'red' : 'green'}
                            content={true ? 'Unfollow' : 'Follow'}
                            />
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
    )
})