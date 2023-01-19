import { observer } from "mobx-react-lite";
import { Divider, Grid, Header, Item, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import FollowButton from "./FollowButton";

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
                        <Statistic label='Followers' value={profile.followersCount} />
                        <Statistic label='Following' value={profile.followingCount} />
                    </Statistic.Group>
                    <Divider />
                    <FollowButton profile={profile} />
                </Grid.Column>
            </Grid>
        </Segment>
    )
})