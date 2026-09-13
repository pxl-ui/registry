import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardName,
  ProfileCardVerifiedBadge,
} from "@/components/ui/pxl/profile-card";

export default function ProfileCardDemo() {
  return (
    <div className="flex flex-col gap-8">
      <ProfileCard>
        <ProfileCardAvatar
          name="@hero"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
        <ProfileCardDetails>
          <ProfileCardName>
            Link <ProfileCardVerifiedBadge />
          </ProfileCardName>
          <ProfileCardBody>@hero</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>
      <ProfileCard orientation="vertical">
        <ProfileCardAvatar size="lg"
          name="@princess"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
          />
        <ProfileCardDetails>
          <ProfileCardName>
            Zelda
          </ProfileCardName>
          <ProfileCardBody>
            Princess, Hyrule
          </ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>
    </div>
  );
}
