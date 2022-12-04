import './Banner.scss';

type BannerProps = {
    title: string;
    backgroundUrl?: string;
};

function Banner(props: BannerProps) {
    const { title, backgroundUrl } = props;

    const bannerStyle = backgroundUrl
        ? {
              backgroundImage: `url(${backgroundUrl})`,
          }
        : {};

    return (
        <section className="banner" style={bannerStyle}>
            <h3>{title}</h3>
        </section>
    );
}

export default Banner;
