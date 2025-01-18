import {useEffect, useRef} from "react";
import './Container.css'

export default function Container() {

    const newsletterRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log(entries)
            if(entries[0].isIntersecting){
                newsletterRef.current.classList.add("active")
                observer.unobserve(newsletterRef.current)
            }
        })

        observer.observe(newsletterRef.current)

        return () => {
            observer.unobserve(newsletterRef.current)
        }
    }, []);

    return (
        <div className="container">
            <h1>Utiliser un observateur</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur deserunt dolores eos
                excepturi facere fuga illo ipsam perspiciatis tempore? A alias aut corporis dolor dolorem dolores enim
                id, impedit iste magni minima necessitatibus nulla voluptate. Assumenda beatae corporis cupiditate earum
                incidunt nemo perspiciatis quasi quibusdam quo veritatis? Aliquid consectetur distinctio excepturi
                minima necessitatibus nemo quia, repellendus rerum tempore. Accusamus adipisci consequatur, corporis
                debitis fuga fugit in labore libero maiores mollitia nam natus nesciunt nihil nisi recusandae reiciendis
                repellendus tempora totam velit voluptatum! Accusamus, amet dignissimos doloribus ea eaque eligendi, et
                fuga iste molestiae possimus repudiandae tenetur veritatis vitae? Aliquam aperiam commodi corporis
                doloremque dolorum, enim error ipsam necessitatibus nemo quae repellendus veniam voluptatem, voluptatum?
                Ab accusamus ad aliquam asperiores autem beatae blanditiis, consectetur consequuntur delectus distinctio
                dolorum ducimus eaque expedita harum id illo magnam maxime molestiae obcaecati odio odit officia
                perferendis, praesentium quasi quis quos ratione reprehenderit repudiandae rerum sed soluta suscipit
                temporibus ut. Amet animi aspernatur autem blanditiis commodi, cumque debitis deserunt dignissimos esse
                eum excepturi expedita harum, inventore magni mollitia natus nemo non obcaecati porro, praesentium
                repellat sed suscipit tempora tempore unde veniam voluptates! Eligendi ipsam molestiae sapiente
                voluptatum? Accusantium aliquam architecto, at beatae commodi consequuntur, deleniti dignissimos dolor
                dolorem earum, fuga magnam maxime mollitia nam neque nisi nobis rerum sunt vero voluptatem! Consequuntur
                cupiditate, dignissimos dolorem earum hic laboriosam maiores natus nostrum odit officia qui quia quod
                repellendus temporibus ullam! Aliquam autem consequatur, cum eveniet itaque laudantium nisi omnis rem
                voluptate. Accusamus aliquid aperiam aut beatae blanditiis consectetur corporis dicta dignissimos ea
                eligendi, enim error est ex facilis id illo illum iste itaque magni mollitia nemo neque nihil nostrum
                obcaecati, odio odit placeat possimus quam, quo quos rem repellendus sapiente sed sint tempora unde
                voluptatem? Consequatur dolorem doloribus ea id iusto minima nostrum odio, praesentium quo recusandae
                rem saepe ullam veritatis voluptate voluptatum? Distinctio ea suscipit ut? Alias animi atque consectetur
                cumque delectus ducimus earum eius eum ex excepturi exercitationem fugit harum ipsum iure minima minus
                molestiae nemo nesciunt nisi nobis numquam odio officiis possimus praesentium provident quam quidem
                quisquam recusandae rem, repellendus reprehenderit rerum sequi suscipit temporibus tenetur unde
                voluptatem? Accusamus aliquam culpa cum delectus dolorum eligendi eos, laboriosam, laudantium modi neque
                officia officiis quidem repellendus! Impedit iusto molestias natus officia quaerat, quibusdam quod sit
                voluptate. Accusamus animi assumenda beatae cum debitis deleniti dicta dolore doloribus dolorum ducimus
                facere ipsa iusto laborum, minus nisi odit, possimus repudiandae rerum sequi tempore? Aliquam aut autem
                dolores doloribus dolorum eius eveniet excepturi fugit, illo illum libero natus necessitatibus nostrum
                praesentium quae quas quia quibusdam repellendus sed sequi sint sunt voluptatibus voluptatum. Ad aliquam
                aperiam at aut cum deserunt dolor dolore dolorem doloribus dolorum earum eius enim est excepturi facere,
                impedit ipsam ipsum necessitatibus nemo nobis nulla numquam, odit quae quam quia quidem repellendus sint
                suscipit vel vitae. Ad cupiditate dolore et hic illo mollitia odit quae? Alias consectetur ipsum minima
                nam odio odit placeat provident. Ab ad aut commodi dolor doloribus ea earum error ex expedita harum
                illum ipsam ipsum iste itaque labore libero minima neque, nobis obcaecati officiis omnis perferendis
                perspiciatis ratione reiciendis reprehenderit saepe, tempora, tenetur veniam veritatis voluptatum. Ab
                asperiores commodi consectetur consequuntur cumque deleniti distinctio eius est eveniet excepturi,
                exercitationem explicabo facilis illo inventore ipsum iusto minus non pariatur quasi, quod reiciendis
                rerum similique soluta temporibus totam unde voluptates. Asperiores deserunt doloremque, ducimus enim
                eos libero maxime quis? Harum illum, laboriosam quasi quia quis voluptatibus. Aperiam consequuntur
                dolorum minima necessitatibus, quasi tenetur totam. Ab aspernatur, cumque distinctio dolorem et
                excepturi expedita explicabo facilis fuga fugiat illo maxime nisi nostrum numquam quaerat quam quod,
                similique suscipit. Adipisci asperiores atque debitis delectus doloribus iure laudantium nulla rem. At
                blanditiis ducimus eligendi est, eum id labore obcaecati officia, officiis optio porro rem voluptates,
                voluptatum? Dolorem magnam, odio optio quae quis quos reiciendis voluptatibus! Ab ad delectus dolores
                eius eligendi eveniet, facere illum in incidunt libero maxime mollitia nisi quod rerum soluta sunt
                tempore! Aliquam amet architecto asperiores aspernatur at, autem corporis cumque deserunt doloremque
                enim error hic impedit in, inventore iste iusto laborum modi molestias nesciunt quae quas quos
                repellendus similique temporibus ullam velit, voluptatum! Alias aperiam aspernatur blanditiis
                consectetur consequuntur culpa deleniti dignissimos dolorem eaque enim est id illum impedit ipsum magni
                maxime nam nemo, perspiciatis quis sapiente sit veniam voluptatum. Ad adipisci aut consectetur cumque
                delectus eligendi facere hic in natus nobis, odit optio quidem, quo ratione voluptatum. Adipisci animi
                blanditiis dignissimos earum eius in, iste molestiae nobis non pariatur quasi reiciendis, rerum sed
                unde.</p>
            <div ref={newsletterRef} className="newsletter">
                <h2>Observed element ! </h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis illum optio placeat vitae.
                Cumque dolorum enim eos hic ipsum laboriosam, modi, necessitatibus nesciunt odio omnis quisquam quo
                sequi, veritatis! Eius, quae, repellendus? Accusamus autem cumque enim expedita explicabo molestiae
                nesciunt non nostrum quod repellendus reprehenderit, repudiandae saepe sequi similique soluta tenetur ut
                vel! Aliquid consectetur, culpa cumque deserunt distinctio dolores error fugit iste laboriosam
                laudantium minima nam nesciunt odit optio perspiciatis, quasi qui quo recusandae tempore, voluptatem? Ad
                architecto cumque doloremque, dolorum ex fuga fugiat iste itaque iusto libero nam, numquam quae
                reiciendis sequi suscipit. Adipisci consequatur ducimus enim expedita, fugit inventore ipsum labore
                laborum laudantium magni minima modi natus obcaecati officiis, pariatur provident quam quas repudiandae
                sed, sit soluta tempora vero? Commodi deserunt dolor error ex facilis nobis nostrum soluta vero,
                voluptates. Ad aliquid ipsam nesciunt officia praesentium velit voluptatibus. Aliquid deleniti ea
                facilis hic ipsam, quisquam recusandae sed sequi voluptates voluptatibus. Alias, aliquam amet animi at
                atque debitis dicta dignissimos et fuga fugiat illo illum iste laboriosam nemo nesciunt nostrum
                obcaecati placeat porro praesentium quam qui quis quos ratione reiciendis rem sequi similique sint
                tempora voluptates, voluptatibus? Aut eos et labore quis soluta. Ipsa magni mollitia nulla. Ad atque aut
                beatae blanditiis consectetur consequuntur corporis cumque dicta ducimus eos error eveniet
                exercitationem facilis minus nobis, non nostrum obcaecati odio perspiciatis possimus praesentium quos
                repudiandae rerum sint sunt tempora tenetur ullam vero voluptatibus voluptatum! Aut deserunt ex
                voluptate. Beatae distinctio facilis neque nesciunt nisi, perspiciatis quisquam recusandae similique
                sint veritatis. Consequatur dignissimos dolorem et expedita quae, quaerat quas quibusdam quisquam unde
                voluptates. Accusamus aliquid amet architecto beatae, blanditiis consequuntur earum esse exercitationem
                facilis laudantium magni, molestias nemo, neque nulla numquam quam quasi quibusdam quod quos repudiandae
                sapiente sed sint vel veniam vero voluptate voluptatibus! Animi asperiores, culpa cupiditate distinctio
                enim est, exercitationem, impedit in labore maxime nobis officiis quas quis quos ratione temporibus vel
                velit veniam voluptates voluptatibus. Ab aspernatur atque beatae consectetur culpa delectus ea eaque eos
                expedita explicabo harum hic itaque iusto, labore maiores nemo nobis odit omnis optio perferendis quasi
                quia quos recusandae repudiandae voluptatibus. Aliquam animi asperiores debitis dignissimos dolorem
                explicabo maiores molestias, nisi nulla praesentium, provident quas quisquam reprehenderit soluta
                temporibus velit voluptatum. A accusamus adipisci alias asperiores consectetur, cum dolorem ea est ex
                expedita explicabo, facere facilis fuga fugiat fugit illo impedit ipsam itaque magnam, magni maiores
                molestiae mollitia nam nihil nobis officia placeat possimus quaerat quas quibusdam quod ratione repellat
                suscipit tempora ut veritatis voluptas! Accusantium adipisci aperiam at, blanditiis cum cumque debitis
                deserunt distinctio dolorum ducimus eos est eum fugiat, hic illo inventore labore magnam minima nam
                neque nesciunt odio officia pariatur porro possimus quia quo rem saepe vel voluptatum. A, architecto,
                asperiores eos esse et eum ex illum ipsum laboriosam laborum nesciunt nulla obcaecati officiis placeat
                provident quae quam quo repellat tempora velit? A accusamus amet debitis distinctio dolor ea eligendi
                fuga fugit ipsum iusto magni modi optio perferendis quaerat saepe sed, sint soluta suscipit tempora
                veritatis? Aliquid asperiores at autem dolor, dolore esse fugiat harum id magnam nemo officia quaerat
                quidem recusandae repellendus, saepe ullam velit voluptate. Architecto commodi dolor explicabo incidunt
                itaque iure nam, nemo officiis pariatur placeat rem, repudiandae sed. Aliquam commodi consequatur cum
                cupiditate distinctio doloremque eius eos, laudantium, libero modi molestias natus nobis obcaecati porro
                ratione tempore vero voluptates! Asperiores aspernatur eveniet explicabo impedit laboriosam quia
                quisquam ratione saepe sequi tempore. Animi architecto at consectetur dolore dolores dolorum ducimus ex
                excepturi harum hic impedit incidunt magni modi, molestiae natus neque nobis perspiciatis quasi quia
                repudiandae sed, similique velit vitae! Aspernatur at atque, deleniti facilis in ipsa laudantium maiores
                molestias nemo numquam officia perferendis praesentium quam quidem sed, similique soluta. Alias, error
                impedit libero repellendus sed velit voluptatem voluptatum? Beatae culpa illum ipsam labore laudantium
                velit! Delectus dicta dolores eum excepturi odit perspiciatis quo recusandae similique. Aliquid beatae
                commodi corporis ducimus exercitationem facilis hic illo iusto, laborum provident qui quidem quod
                sapiente sequi soluta tenetur ullam voluptatibus. Ab aliquid aperiam aspernatur atque autem cum
                cupiditate, ducimus enim excepturi explicabo impedit, incidunt ipsa itaque magni maxime molestiae
                molestias, nihil nulla provident quaerat quidem repudiandae tempore ullam unde velit vero vitae? Earum
                iste nesciunt quaerat. Assumenda corporis culpa dolores doloribus recusandae reiciendis rem sunt velit
                voluptate voluptatum. Assumenda autem cumque debitis distinctio eaque, earum enim facere impedit
                molestias necessitatibus omnis porro, quo. Aliquid asperiores, aut autem commodi culpa, ducimus ea id
                impedit, inventore laboriosam magni minus molestiae nobis non officia perferendis quidem quos ratione
                temporibus ullam vel.</p>
        </div>
    )
}