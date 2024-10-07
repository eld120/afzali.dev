import Link from 'next/link'
import Image from 'next/image'
function SocialBar() {
    return (
        <div className='flex gap-6 justify-center'>
            {/* email */}
            < Link href={"mailto:devteam@origma.io"} >
                <Image
                    src={"/static/Antu_mail-folder-sent.png"}
                    width={36}
                    height={36}
                    alt='Email Me Logo'
                />
            </ Link>
            {/* linkedin */}
            < Link href={"https://www.linkedin.com/in/seyamack-a-912009202/"} >
                <Image
                    src="/static/LinkedIn_icon.svg" alt='LinkedIn Logo' width={36} height={36}
                />
            </ Link>
            {   /* github */}
            <Link href={"https://github.com/eld120"} >
                <Image
                    src="/static/github-mark-white.png" alt='Github Logo' width={36} height={36}
                />
            </Link >
        </div>

    )
}

export default SocialBar