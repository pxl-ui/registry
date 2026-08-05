import { Card, CardContent } from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardWithScrollableContent() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="sm">
      <Card size="lg" className="size-full">
        <CardContent scrollable>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in sapien eleifend pellentesque. Integer porta molestie mi vitae faucibus. Donec elementum consequat nibh id mollis. Phasellus in sagittis elit, et blandit augue. Aliquam scelerisque, leo vitae cursus porta, libero tortor facilisis arcu, vitae interdum nulla lacus vitae ipsum. Maecenas euismod, nibh sed tincidunt sodales, sem lectus commodo magna, non tristique orci sapien nec elit. Aliquam a faucibus nisl. Proin nunc quam, auctor eget nibh nec, accumsan finibus nisi. Morbi non orci vel turpis venenatis mollis.

Nunc sed varius nisi. Ut consequat lacus et velit vehicula, in egestas purus rutrum. In in sodales nisl. Praesent bibendum ante metus. Vestibulum lectus diam, sollicitudin vel quam ac, dapibus commodo sem. Proin et eros vel tellus accumsan efficitur. Aenean a euismod ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Phasellus maximus ultrices ultricies. Phasellus nisi turpis, gravida id facilisis a, ornare quis sapien. Phasellus venenatis eu justo non varius. Duis eu lobortis erat. Maecenas maximus mauris odio, in faucibus lectus porttitor in. Aliquam in sapien sed dolor cursus efficitur sed et ex. Fusce odio felis, cursus nec magna eu, finibus ultricies justo. Vestibulum id rhoncus erat, et lacinia ligula. Duis cursus porta neque. Quisque semper libero odio. Sed vel velit aliquet, luctus mi vel, tincidunt nunc.

Proin eleifend imperdiet sapien, vitae finibus est egestas vel. Suspendisse a tellus nec tortor dignissim aliquam ultrices at sapien. Proin tempus varius porta. Curabitur sed vulputate lacus. Pellentesque mauris risus, semper sed nulla in, auctor ornare elit. Duis egestas elementum lorem sed tempus. Integer placerat lorem nec augue congue, facilisis fringilla elit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam semper, ipsum eget fermentum ultrices, purus dui blandit nisi, nec dignissim urna augue non urna.

Vestibulum non ultricies sem, ut luctus nisi. Vestibulum vel rhoncus justo. Maecenas accumsan tortor arcu, in interdum justo molestie quis. Nulla ultricies ligula nec tellus dictum, a cursus lorem mattis. Suspendisse tristique lacus quis euismod gravida. Nullam lacinia dui in ex molestie pellentesque. Phasellus varius congue augue ac porta. Donec vitae imperdiet arcu, non cursus nulla.

Curabitur commodo, augue et dictum elementum, sapien nisi lacinia ex, in convallis sapien sem eget justo. Vestibulum efficitur porttitor auctor. Duis non tortor a quam rutrum tempor nec et nibh. Vestibulum eu consequat massa, scelerisque feugiat arcu. Nam vehicula justo et libero rhoncus, tristique commodo nisi fringilla. Phasellus placerat pretium enim ac pretium. Etiam vehicula mi metus, at lobortis dui vehicula quis.

Donec fringilla dolor sed nisl facilisis ornare. Proin varius libero quam, ut fringilla massa vulputate at. Vestibulum et tellus dapibus turpis vehicula egestas. Sed malesuada luctus sagittis. Integer laoreet ante ac dapibus pellentesque. Sed nibh metus, rhoncus sed sollicitudin eu, viverra sed arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam gravida nisl id sem scelerisque aliquet.

Aliquam tempor est a dolor ullamcorper, sit amet sollicitudin lorem malesuada. Maecenas dapibus tempor rhoncus. Fusce pulvinar eros in enim vehicula rutrum. Etiam sed massa a risus viverra pellentesque. Aenean sem enim, viverra id imperdiet a, mattis sed velit. Duis id augue a sapien sodales cursus. Aliquam non volutpat leo. Morbi lobortis tincidunt lacinia. Nulla molestie ex id ex volutpat sagittis. Mauris vehicula gravida malesuada. Nulla elementum velit sed blandit dictum. Ut a erat eget massa bibendum posuere nec sit amet dolor. Aliquam condimentum, nulla vel malesuada auctor, urna enim rutrum ligula, vel venenatis velit purus sagittis leo. Quisque in ultricies dui, ut aliquet lorem.

Cras lacus lacus, elementum id gravida nec, pretium non mi. Vestibulum non suscipit dolor. Vivamus sed ante sed tortor dignissim blandit. Mauris ultricies tortor ex, in dignissim nulla molestie vitae. Mauris a metus laoreet neque vehicula hendrerit. Donec venenatis eros rhoncus metus rhoncus, a fringilla eros aliquam. Fusce vitae maximus mi. Vivamus porta convallis rhoncus. Ut volutpat rhoncus sagittis. Donec dignissim sodales turpis ac lobortis. Proin a lobortis leo. Donec metus nisl, faucibus ac tempor ut, dictum ac magna. Proin et libero molestie, finibus nunc eget, aliquam enim. Etiam non pulvinar ex, at condimentum purus. Duis volutpat ac lorem auctor cursus.

Maecenas hendrerit velit nibh, vitae consectetur augue molestie sit amet. Nulla mollis elementum lorem, in ullamcorper nisl dapibus sed. Ut venenatis finibus tempor. Sed sodales augue et tellus luctus, ut imperdiet augue rutrum. Donec non ullamcorper elit. Donec faucibus justo in turpis ultrices, vitae commodo turpis pharetra. Donec fermentum mollis est, vel pharetra libero molestie at.
        </CardContent>
        {/* <CardContent className="pr-0 w-[calc(100%+2px)] overflow-auto scrollbar-thumb-ring scrollbar-gutter-stable scrollbar-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in sapien eleifend pellentesque. Integer porta molestie mi vitae faucibus. Donec elementum consequat nibh id mollis. Phasellus in sagittis elit, et blandit augue. Aliquam scelerisque, leo vitae cursus porta, libero tortor facilisis arcu, vitae interdum nulla lacus vitae ipsum. Maecenas euismod, nibh sed tincidunt sodales, sem lectus commodo magna, non tristique orci sapien nec elit. Aliquam a faucibus nisl. Proin nunc quam, auctor eget nibh nec, accumsan finibus nisi. Morbi non orci vel turpis venenatis mollis.

Nunc sed varius nisi. Ut consequat lacus et velit vehicula, in egestas purus rutrum. In in sodales nisl. Praesent bibendum ante metus. Vestibulum lectus diam, sollicitudin vel quam ac, dapibus commodo sem. Proin et eros vel tellus accumsan efficitur. Aenean a euismod ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Phasellus maximus ultrices ultricies. Phasellus nisi turpis, gravida id facilisis a, ornare quis sapien. Phasellus venenatis eu justo non varius. Duis eu lobortis erat. Maecenas maximus mauris odio, in faucibus lectus porttitor in. Aliquam in sapien sed dolor cursus efficitur sed et ex. Fusce odio felis, cursus nec magna eu, finibus ultricies justo. Vestibulum id rhoncus erat, et lacinia ligula. Duis cursus porta neque. Quisque semper libero odio. Sed vel velit aliquet, luctus mi vel, tincidunt nunc.

Proin eleifend imperdiet sapien, vitae finibus est egestas vel. Suspendisse a tellus nec tortor dignissim aliquam ultrices at sapien. Proin tempus varius porta. Curabitur sed vulputate lacus. Pellentesque mauris risus, semper sed nulla in, auctor ornare elit. Duis egestas elementum lorem sed tempus. Integer placerat lorem nec augue congue, facilisis fringilla elit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam semper, ipsum eget fermentum ultrices, purus dui blandit nisi, nec dignissim urna augue non urna.

Vestibulum non ultricies sem, ut luctus nisi. Vestibulum vel rhoncus justo. Maecenas accumsan tortor arcu, in interdum justo molestie quis. Nulla ultricies ligula nec tellus dictum, a cursus lorem mattis. Suspendisse tristique lacus quis euismod gravida. Nullam lacinia dui in ex molestie pellentesque. Phasellus varius congue augue ac porta. Donec vitae imperdiet arcu, non cursus nulla.

Curabitur commodo, augue et dictum elementum, sapien nisi lacinia ex, in convallis sapien sem eget justo. Vestibulum efficitur porttitor auctor. Duis non tortor a quam rutrum tempor nec et nibh. Vestibulum eu consequat massa, scelerisque feugiat arcu. Nam vehicula justo et libero rhoncus, tristique commodo nisi fringilla. Phasellus placerat pretium enim ac pretium. Etiam vehicula mi metus, at lobortis dui vehicula quis.

Donec fringilla dolor sed nisl facilisis ornare. Proin varius libero quam, ut fringilla massa vulputate at. Vestibulum et tellus dapibus turpis vehicula egestas. Sed malesuada luctus sagittis. Integer laoreet ante ac dapibus pellentesque. Sed nibh metus, rhoncus sed sollicitudin eu, viverra sed arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam gravida nisl id sem scelerisque aliquet.

Aliquam tempor est a dolor ullamcorper, sit amet sollicitudin lorem malesuada. Maecenas dapibus tempor rhoncus. Fusce pulvinar eros in enim vehicula rutrum. Etiam sed massa a risus viverra pellentesque. Aenean sem enim, viverra id imperdiet a, mattis sed velit. Duis id augue a sapien sodales cursus. Aliquam non volutpat leo. Morbi lobortis tincidunt lacinia. Nulla molestie ex id ex volutpat sagittis. Mauris vehicula gravida malesuada. Nulla elementum velit sed blandit dictum. Ut a erat eget massa bibendum posuere nec sit amet dolor. Aliquam condimentum, nulla vel malesuada auctor, urna enim rutrum ligula, vel venenatis velit purus sagittis leo. Quisque in ultricies dui, ut aliquet lorem.

Cras lacus lacus, elementum id gravida nec, pretium non mi. Vestibulum non suscipit dolor. Vivamus sed ante sed tortor dignissim blandit. Mauris ultricies tortor ex, in dignissim nulla molestie vitae. Mauris a metus laoreet neque vehicula hendrerit. Donec venenatis eros rhoncus metus rhoncus, a fringilla eros aliquam. Fusce vitae maximus mi. Vivamus porta convallis rhoncus. Ut volutpat rhoncus sagittis. Donec dignissim sodales turpis ac lobortis. Proin a lobortis leo. Donec metus nisl, faucibus ac tempor ut, dictum ac magna. Proin et libero molestie, finibus nunc eget, aliquam enim. Etiam non pulvinar ex, at condimentum purus. Duis volutpat ac lorem auctor cursus.

Maecenas hendrerit velit nibh, vitae consectetur augue molestie sit amet. Nulla mollis elementum lorem, in ullamcorper nisl dapibus sed. Ut venenatis finibus tempor. Sed sodales augue et tellus luctus, ut imperdiet augue rutrum. Donec non ullamcorper elit. Donec faucibus justo in turpis ultrices, vitae commodo turpis pharetra. Donec fermentum mollis est, vel pharetra libero molestie at.
        </CardContent> */}
      </Card>
      </WidgetArea>
    </div>
  );
}
